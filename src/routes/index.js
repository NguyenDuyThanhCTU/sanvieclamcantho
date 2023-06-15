import Home from "../components/Home/Home";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Job from "../components/Job/Job";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import EmployerLayout from "../Layout/EmployerLayout/EmployerLayout";
import EmloyerHome from "../components/Emloyer/Home/EmloyerHome";
import ServicePrices from "../components/Emloyer/ServicePrices/ServicePrices";

export const AllRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/job",
    component: Job,
  },
  {
    path: "/employer",
    component: EmloyerHome,
    Layout: EmployerLayout,
  },
  {
    path: "/employer/prices",
    component: ServicePrices,
    Layout: EmployerLayout,
  },
  {
    path: "/login",
    component: Login,
    Layout: EmptyLayout,
  },
  {
    path: "/profile",
    component: Profile,
    Layout: EmptyLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: EmptyLayout,
  },
];
