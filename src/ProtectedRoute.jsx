import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function ProtectedRoute({ children }) {
  const [user, setUser]     = useState(null);
  const [loading, setLoad ] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoad(false);
    });
    return () => unsub();
  }, []);

  if (loading) return null;
  return user ? children : <Navigate to="/auth" replace />;
}
