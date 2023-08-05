import React, { useState } from 'react';
import Logo from "../Assets/Logo.svg";
import { BsArrowBarUp } from "react-icons/bs";
import { HiCommandLine } from "react-icons/hi2";
import {
    Box , 
    Drawer , 
    List, 
    ListItem , 
    ListItemIcon , 
    ListItemText 
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentBankRoundedIcon from "@mui/icons-material/CommentBankRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuOPtions = [
        {
            text: "Home",
            icon: <HomeIcon /> 
        },
        {
            text: "About",
            icon: < InfoIcon/> 
        },
        {
            text: "Testimonials",
            icon: <CommentBankRoundedIcon /> 
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon /> 
        },
        {
            text: "Cart",
            icon: <ShoppingCartCheckoutRoundedIcon /> 
        },
    ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={ Logo } alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <a href="">
                <BsArrowBarUp className='navbar-cart-icon' />
            </a>
            <button className='primary-button'>
                Book Now
            </button>
        </div>
        <div className='navbar-menu-container'>
            < HiCommandLine onClick={() => setOpenMenu(true) }/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} 
        anchor='right'>
        <Box 
            sx={{ width: 250 }}
            role='presentation'
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
        >
            <List>
                {menuOPtions.map((item)=>(
                    <ListItem key={item.text} disablePadding>
                        <ListItemIcon>{ item.icon }</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
        </Drawer>
    </nav>
  );
}

export default Navbar