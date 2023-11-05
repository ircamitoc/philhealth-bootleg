import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationItem, getNavigation } from "../services/navigation";

interface NavigationBarProps {
  text?: string;
  route?: string;
  subitems?: NavigationItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [navigationData, setNavigationData] = useState<NavigationItem[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getNavigation().then((data) => setNavigationData(data));
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Logos go here */}
        </div>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          {navigationData.map((item: NavigationItem) => (
            <div key={item.text}>
              {item.route ? (
                <Link to={item.route as string} style={{ textDecoration: "none" }}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{ margin: "0 10px" }}
                  >
                    {item.text}
                  </Button>
                </Link>
              ) : (
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  style={{ margin: "0 10px" }}
                >
                  {item.text}
                </Button>
              )}

              {item.subitems && (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {item.subitems.map((subitem: NavigationItem) => (
                    <Link to={subitem.route as string} key={subitem.text} style={{ textDecoration: "none" }}>
                      <MenuItem onClick={handleClose}>{subitem.text}</MenuItem>
                    </Link>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
