import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

export default function Router() {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> }
      ],
    },
  ]);
  return element;
}
