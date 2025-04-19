import { BrowserRouter } from "react-router-dom";
import Header   from "./components/Header/Header";
import Footer   from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="container">
      <AppRoutes />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
