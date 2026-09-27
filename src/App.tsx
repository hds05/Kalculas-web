import { Outlet } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Setup from "./components/Page-2/Setup";

function App() {
  return (
    <div className="w-full h-screen ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
