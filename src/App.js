import { Provider } from "react-redux";
import "./App.css";
import { AppRouter } from "./components/router/AppRouter";
import { store } from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
