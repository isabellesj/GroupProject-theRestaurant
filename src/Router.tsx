import { createBrowserRouter } from "react-router-dom";
import { Booking } from "./pages/Booking";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Menu } from "./pages/Menu";
import { Confirmation } from "./pages/Confirmation";
import { PagesLayout } from "./pages/PagesLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: "/pages",
    element: <PagesLayout />,
    children: [
      {
        path: "/pages/booking",
        element: <Booking />,
      },
      {
        path: "/pages/confirmation/:id",
        element: <Confirmation />,
      },
      {
        path: "/pages/contact",
        element: <Contact />,
      },
      {
        path: "/pages/menu",
        element: <Menu />,
      },
      {
        path: "/pages/admin",
        element: <Admin />,
      },
    ],
  },
]);
