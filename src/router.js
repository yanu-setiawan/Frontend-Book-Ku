import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/create-book",
    element: <CreateBook />,
  },
  {
    path: "/edit-book/:id",
    element: <EditBook />,
  },
]);

export default router;
