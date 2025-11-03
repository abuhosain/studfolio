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
import SoseePortfolio from "../pages/student/Sosee-708335";
import NafisPortfolio from "../pages/student/Nafis-715494";
import BristiPortfolio from "../pages/student/Bristi-715495";
import MorshedPortfolio from "../pages/student/Morshed-715506";
import DiponkarPortfolio from "../pages/student/Diponkar-715507";
import AnnanaPortfolio from "../pages/student/Annana-715508";
import RafiPortfolio from "../pages/student/Rafi-715510";
import OsimPortfolio from "../pages/student/Osim-715517";
import ShoumitPortfolio from "../pages/student/Shoumit-715519";
import RobinPortfolio from "../pages/student/Robin-715520";
import RuhanPortfolio from "../pages/student/Ruhan-715521";
import JerinPortfolio from "../pages/student/Jerin-715526";
import TaniyaPortfolio from "../pages/student/Taniya-715527";
import RifatPortfolio from "../pages/student/Rifat-715528";
import NishanPortfolio from "../pages/student/Nishan-715530";
import RahaPortfolio from "../pages/student/Raha-715535";
import NusratPortfolio from "../pages/student/Nusrat-715536";
import Rifat38Portfolio from "../pages/student/Rifat-715538";
import TawhidPortfolio from "../pages/student/Tawhid-715539";
import ZamiulPortfolio from "../pages/student/Zamiul-715542";
import MahfuzurPortfolio from "../pages/student/Mahfuzur-715543";
import SadiaPortfolio from "../pages/student/Sadia-715544";
import HanjalalPortfolio from "../pages/student/Hanjalal-715546";
import NuhasPortfolio from "../pages/student/Nuhas-715547";

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
        path: "student/708335",
        element: <SoseePortfolio />,
      },
      {
        path: "student/715494",
        element: <NafisPortfolio />,
      },
      {
        path: "student/715495",
        element: <BristiPortfolio />,
      },
      {
        path: "student/715499",
        element: <PrantoPortfolio />,
      },
      {
        path: "student/715506",
        element: <MorshedPortfolio />,
      },
      {
        path: "student/715507",
        element: <DiponkarPortfolio />,
      },
      {
        path: "student/715508",
        element: <AnnanaPortfolio />,
      },
      {
        path: "student/715510",
        element: <RafiPortfolio />,
      },
      {
        path: "student/715517",
        element: <OsimPortfolio />,
      },
      {
        path: "student/715519",
        element: <ShoumitPortfolio />,
      },
      {
        path: "student/715520",
        element: <RobinPortfolio />,
      },
      {
        path: "student/715521",
        element: <RuhanPortfolio />,
      },
      {
        path: "student/715526",
        element: <JerinPortfolio />,
      },
      {
        path: "student/715527",
        element: <TaniyaPortfolio />,
      },
      {
        path: "student/715528",
        element: <RifatPortfolio />,
      },
      {
        path: "student/715530",
        element: <NishanPortfolio />,
      },
      {
        path: "student/715534",
        element: <AbuHosainProfile />,
      },
      {
        path: "student/715535",
        element: <RahaPortfolio />,
      },
      {
        path: "student/715536",
        element: <NusratPortfolio />,
      },
      {
        path: "student/715538",
        element: <Rifat38Portfolio />,
      },
      {
        path: "student/715539",
        element: <TawhidPortfolio />,
      },
      {
        path: "student/715542",
        element: <ZamiulPortfolio />,
      },
      {
        path: "student/715543",
        element: <MahfuzurPortfolio />,
      },
      {
        path: "student/715544",
        element: <SadiaPortfolio />,
      },
      {
        path: "student/715546",
        element: <HanjalalPortfolio />,
      },
      {
        path: "student/715547",
        element: <NuhasPortfolio />,
      },
    ],
  },
]);

export default router;
