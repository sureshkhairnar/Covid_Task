import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import routes from "../FrontendRoutes";
import { NavLink as NLink } from "react-router-dom";
import { styled } from "@mui/material";
const NavLink = styled(NLink)({
  textDecoration: "none",
});

const SidebarMenu = ({ open }) => {
  return (
    <List style={{ color: "blue" }}>
      {Array.isArray(routes) &&
        routes
          .filter((route) => route.showInMenu)
          .map(({ path, label, icon }, index) => (
            <ListItem
              key={path + "-" + index}
              disablePadding
              sx={{ display: "block" }}
            >
              <NavLink
                end
                to={path}
                style={({ isActive }) => ({
                  color: isActive ? "#888" : "#000",
                })}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
    </List>
  );
};

export default SidebarMenu;
