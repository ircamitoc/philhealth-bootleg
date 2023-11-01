import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "../src/pages/Home"
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Members from "./pages/Members";
import OurPartners from './pages/OurPartners';
import OnlineServices from './pages/OnlineServices';
import Downloads from './pages/Downloads';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/members",
    element: <Members />
  },
  {
    path: "/our-partners",
    element: <OurPartners />
  },
  {
    path: "/online-services",
    element: <OnlineServices />
  },
  {
    path: "/downloads",
    element: <Downloads />
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
