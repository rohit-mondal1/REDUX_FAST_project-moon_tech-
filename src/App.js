import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import stor from "./Redux/State";
import { router } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Provider store={stor}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
