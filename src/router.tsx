import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { AboutMe } from "./pages/AboutMe";
import { Competencies } from "./pages/Competencies";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter(
  [
    {
      Component: Layout,
      children: [
        {
          path: "aboutme",
          Component: AboutMe,
        },
        {
          path: "/",
          element: <Navigate to="aboutme" replace />,
        },
        {
          path: "competencies",
          Component: Competencies,
        },
        {
          path: "contact",
          Component: Contact,
        },
      ],
    },
  ],
  {
    basename: "/Portafolio",
  },
);
