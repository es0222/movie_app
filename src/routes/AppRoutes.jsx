import { Routes, Route } from "react-router-dom";

import Home         from "../pages/Home";
import AllMovies    from "../pages/AllMovies";
import Contact      from "../pages/Contact";
import MovieDetails from "../pages/MovieDetails";
import SearchResult from "../pages/SearchResult";

import AuthSlider     from "../components/Authslider/AuthSlider";
import ProtectedRoute from "../ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* صفحة التسجيل / تسجيل الدخول غير محمية */}
      <Route path="/auth" element={<AuthSlider />} />

      {/* Home متاحة للجميع */}
      <Route path="/" element={<Home />} />

      {/* باقي الصفحات محمية */}
      <Route
        path="/all"
        element={
          <ProtectedRoute>
            <AllMovies />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movie/:movieId"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <SearchResult />
          </ProtectedRoute>
        }
      />

      {/* أي مسار غير معروف يذهب إلى صفحة الـAuth */}
      <Route path="*" element={<AuthSlider />} />
    </Routes>
  );
}
