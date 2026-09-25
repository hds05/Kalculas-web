import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Setup from "./components/Page-2/Setup";

function App() {
  return (
    <div className="w-full h-screen ">
      <Header />
      <div className="">
        <Dashboard />
      </div>
        {/* <Setup /> */}
    </div>
  );
}

export default App;
