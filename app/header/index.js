"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

import mainLogo from "../../public/assets/Logo.svg.png";

import backgroundImageHeader from "../../public/assets/background_image.jpg";
import bg1 from "../../public/assets/bg_img_1.jpg";
import bg2 from "../../public/assets/bg_img_2.jpg";
import bg3 from "../../public/assets/bg_img_3.jpg";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const StepImg = () => (
  <Carousel autoplay>
    <div>
      <Image
        className="h-[200px] md:h-[300px] w-[2000px]"
        loading="lazy"
        // style={{ height: "300px", width: "2000px" }}
        src={backgroundImageHeader}
        alt="thiet ke lan anh"
      />
      {/* <span id="content1" >
          Some content
        </span> */}
    </div>
    <div style={{ height: "200px" }}>
      <Image
        className="h-[200px] md:h-[300px] w-[2000px]"
        // style={{ height: "300px", width: "2000px" }}
        loading="lazy"
        src={bg1}
        alt="thiet ke lan anh"
      />
    </div>
    <div>
      <Image
        loading="lazy"
        className="h-[200px] md:h-[300px] w-[2000px]"
        // style={{ height: "300px", width: "2000px" }}
        src={bg2}
        alt="thiet ke lan anh"
      />
    </div>
    <div>
      <Image
        loading="lazy"
        className="h-[200px] md:h-[300px] w-[2000px]"
        // style={{ height: "300px", width: "2000px" }}
        src={bg3}
        alt="thiet ke lan anh"
      />
    </div>
  </Carousel>
);

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [background, setBackground] = React.useState("transparent");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <div className="cursor-pointer">
        <Link href="/">
          <Image src={mainLogo} alt="logo home design" width={50} />
        </Link>
      </div>
      <Divider />
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <List>
        <ListItem key={"Home"} disablePadding>
          <Link href="/home">
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} className="hover:text-orange-400" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"About"} disablePadding>
          <Link href="/about">
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"About"} className="hover:text-orange-400" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItemButton
          onClick={() => {
            const scrollingElement = document.scrollingElement || document.body;
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
          }}
        >
          <ListItemText primary={"Contact"} className="hover:text-orange-400" />
        </ListItemButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const bgImgRef = React.useRef(null);

  document?.addEventListener("scroll", () => {
    if (bgImgRef?.current?.getBoundingClientRect()?.y == 0) {
      setBackground("transparent");
    } else {
      setBackground("#2458A1");
    }
  });

  return (
    <>
      {/* <Image src={backgroundImageHeader} width={2000} alt="thiet ke lan anh" ref={bgImgRef} /> */}
      <div ref={bgImgRef}>
        <StepImg className="inline-block" />
      </div>
      <Box sx={{ display: "flex" }} className="mb-20">
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: background }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              {/* MUI */}
              <Link href="/home">
                <Image src={mainLogo} alt="logo home design" width={50} className="cursor-pointer" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {/* {navItems.map((item) => (
                <Button key={item} sx={{ color: "#EEE" }}>
                  {item}
                </Button>
              )
              )} */}
              <Link href="/home">
                <Button sx={{ textAlign: "center", color: "white" }}>
                  <ListItemText primary={"Home"} className="hover:text-orange-400" />
                </Button>
              </Link>
              <Link href="/about">
                <Button sx={{ textAlign: "center", color: "white" }}>
                  <ListItemText primary={"About"} className="hover:text-orange-400" />
                </Button>
              </Link>

              <Button
                sx={{ textAlign: "center", color: "white" }}
                onClick={() => {
                  const scrollingElement = document.scrollingElement || document.body;
                  scrollingElement.scrollTop = scrollingElement.scrollHeight;
                }}
              >
                <ListItemText primary={"Contact"} className="hover:text-orange-400" />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
