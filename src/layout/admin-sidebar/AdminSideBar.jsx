import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { IoSettings } from "react-icons/io5";
import { GiChemicalTank } from "react-icons/gi";
import Color from "../../assets/images/test.jpg";
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FaHome, FaVestPatches, FaHistory, FaComments} from "react-icons/fa";
import { MdMarkEmailUnread, MdEditDocument, MdOutlineHelp } from "react-icons/md";
import "./AdminSideBar.scss"

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AdminSideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open} className='admin-side__bar'>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <div className="adimin-bar-menu">
          <ul>
            <li>
              <a href="/"><FaHome/> {open ? "Home" : ""}</a>
            </li>
            <li>
              <a href="/"><FaVestPatches/> {open ? "Patients" : ""}</a>
            </li>
            <li>
              <a href="/"><MdMarkEmailUnread/> {open ? "Massages" : ""}</a>
            </li>
            <li>
              <a href="/"><GiChemicalTank/> {open ? "Lab test" : ""}</a>
            </li>
            <li>
              <a href="/"><MdEditDocument/> {open ? "Documents" : ""}</a>
            </li>
            <li>
              <a href="/"><FaHistory/> {open ? "Histry" : ""}</a>
            </li>
            <li>
              <a href="/"><FaComments/> {open ? "Community" : ""}</a>
            </li>
            <li>
              <a href="/"><MdOutlineHelp/> {open ? "Help" : ""}</a>
            </li>
            <li>
              <a href="/admin/setting"><IoSettings/> {open ? "Settings" : ""}</a>
            </li>
            
          </ul>
        </div>
      </Drawer>
    </>
  );
}