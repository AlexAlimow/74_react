import "./App.css";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="app">
      <h1>React Introduction</h1>

      {/* Вызов компонента Feedback */}
      <Feedback />
    </div>
  );
}

export default App;