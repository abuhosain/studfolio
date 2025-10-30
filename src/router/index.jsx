import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import Students from "../components/Students";
import Contact from "../components/Contact";
import AbuHosainProfile from "../pages/student/Hosain-715534";
import HelalProfile from "../pages/student/Helal-715524";
import RakibulProfile from "../pages/student/Rakibul-715523";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "student/715534",
        element: <AbuHosainProfile />,
      },
      {
        path: "student/715523",
        element: <RakibulProfile />,
      },
      {
        path: "student/715524",
        element: <HelalProfile />,
      },
    ],
  },
]);

export default router;
