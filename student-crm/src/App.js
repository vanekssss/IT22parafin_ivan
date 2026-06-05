import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;