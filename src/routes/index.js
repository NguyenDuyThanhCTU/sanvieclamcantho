import Home from "../components/Home/Home";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Job from "../components/Job/Job";
import Employer from "../components/Emloyer/Emloyer";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";

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
    component: Employer,
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
