import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Head from './components/Head';
import Body from './components/Body';
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Head />
      <RouterProvider router={appRouter} />    </div>
    </Provider>
  );
}

export default App;
