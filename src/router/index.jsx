import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import Students from "../components/Students";
import Contact from "../components/Contact";
import AbuHosainProfile from "../pages/student/Hosain-715534";
import PrantoPortfolio from "../pages/student/Pranto-715499";
import PolashPortfolio from "../pages/student/Polash-515401";
import ALAminPortfolio from "../pages/student/Alamin-616383";
import BarshaPortfolio from "../pages/student/Barsha-616384";
import NayemPortfolio from "../pages/student/Nayem-702938";

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
        path: "student/515401",
        element: <PolashPortfolio />,
      },
      {
        path: "student/616383",
        element: <ALAminPortfolio />,
      },
      {
        path: "student/616384",
        element: <BarshaPortfolio />,
      },
      {
        path: "student/702938",
        element: <NayemPortfolio />,
      },
      {
        path: "student/715534",
        element: <AbuHosainProfile />,
      },
      {
        path: "student/715499",
        element: <PrantoPortfolio />,
      },
    ],
  },
]);

export default router;
