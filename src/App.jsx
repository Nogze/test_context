import "./App.css";
import { TimerProvider } from "./TimerContext";
import Test from "./components/Test/Test";
import Test2 from "./components/Test2/Test2";

function App() {
  return (
    <div>
      <TimerProvider>
        <Test />
      </TimerProvider>
      <TimerProvider>
        <Test2 />
      </TimerProvider>
    </div>
  );
}

export default App;
