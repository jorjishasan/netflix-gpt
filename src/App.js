import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./pages/Body";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Login /> }, // Default route
      { path: "/browse", element: <Browse /> }, // Browse route
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
