import React from "react";
import Contact from "./Contact";
import MapGraph from "../MapGraph";
import { ContactEmergency, Map } from "@mui/icons-material";

export default [
  {
    label: "Login",
    path: "/",
    showInMenu: true,
    addRoute: true,
    icon: <ContactEmergency />,
    component: <Contact />,
  },
  {
    label: "Map And Graph",
    path: "contact",
    showInMenu: true,
    addRoute: true,
    icon: <Map />,
    component: <MapGraph />,
  },
];
