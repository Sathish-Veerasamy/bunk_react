import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Petrol from "../../components/Petrol/Petrol";
import "./DashBoard.css";
import Diesel from "../../components/Diesel/Diesel";
import Lubes from "../../components/Lubes/Lubes";
import { useNavigate } from "react-router-dom";

//giving the width of the drawer in the page
const drawerWidth = 220;

export default function Dashboard() {
  const navigate = useNavigate();
  //creating the variable to update the dailyentries status
  const [isDailyEntriesClick, setIsDailyEntriesClick] = useState(false);

  //function for handling the clicks done by the button based on the text inside
  const handleOnClick = (menuoption) => {
    menuoption === "Daily Entries" &&
      setIsDailyEntriesClick(!isDailyEntriesClick);
    console.log(menuoption);
    menuoption === "Petrol" && navigate("/daily-entries/petrol");
    menuoption === "Diesel" && navigate("/daily-entries/diesel");
    menuoption === "Lubes" && navigate("/daily-entries/lubes");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { name: "Daily Entries", link: "/daily-entries" },
              { name: "Approve Entries", link: "/approve-entries" },
              { name: "User Maintenance", link: "/user-maintenance" },
              { name: "Data Base", link: "/data-base" },
            ].map((text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleOnClick(text.name)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <Link to={text.link}>
                      <ListItemText primary={text.name} />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  {text.name === "Daily Entries" && isDailyEntriesClick && (
                    <div>
                      <List>
                        {["Petrol", "Diesel", "Lubes"].map((text, index) => (
                          <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => handleOnClick(text)}>
                              <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                              </ListItemIcon>
                              <ListItemText
                                primary={text}
                                sx={{ color: "blue" }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  )}
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="daily-entries">
            <Route path="petrol" element={<Petrol />} />
            <Route path="diesel" element={<Diesel />} />
            <Route path="lubes" element={<Lubes />} />
          </Route>
          <Route path="approve-entries" element={<Diesel />} />
          <Route path="user-maintenance" element={<Petrol />} />
          <Route path="data-base" element={<Petrol />} />
        </Routes>
      </Box>
    </Box>
  );
}
