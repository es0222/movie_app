// src/App.jsx
import Header    from "./components/Header/Header";
import Footer    from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="container" style={{ backgroundColor: "black" }}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
