import {
  HomeIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  ServerStackIcon,
  RectangleStackIcon,
  BuildingStorefrontIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, About, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Inicio",
        path: "/home",
        element: <Home />,
      },
       {
        icon: <UserCircleIcon {...icon} />,
        name: "Nosotros",
        path: "/about",
        element: <About />,
      },
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "Direccion",
        path: "/profile",
        element: <Profile />,
      },
     
      {
        icon: <ChatBubbleLeftEllipsisIcon {...icon} />,
        name: "Contacto",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "Products",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Trofeos",
        // path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Medallas",
        // path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
