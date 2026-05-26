import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explorar from "./pages/Explorar";
import LocalDetalhes from "./pages/LocalDetalhes";
import Comunidade from "./pages/Comunidade";
import LadoB from "./pages/LadoB";
import Favoritos from "./pages/Favoritos";
import Eventos from "./pages/Eventos";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/explorar",
    Component: Explorar,
  },
  {
    path: "/local/:id",
    Component: LocalDetalhes,
  },
  {
    path: "/comunidade",
    Component: Comunidade,
  },
  {
    path: "/lado-b",
    Component: LadoB,
  },
  {
    path: "/favoritos",
    Component: Favoritos,
  },
  {
    path: "/eventos",
    Component: Eventos,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);
