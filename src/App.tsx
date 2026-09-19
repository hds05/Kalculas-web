import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Setup from "./components/Page-2.tsx/Setup";

function App() {
  return (
    <div className="w-full h-screen bg-black/85">
      <Header />
      {/* <div className="flex justify-center items-center h-screen"> */}
        {/* <Dashboard /> */}
      {/* </div> */}
        <Setup />
    </div>
  );
}

export default App;
