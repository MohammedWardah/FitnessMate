import { Outlet } from "react-router-dom";

import Footer from "../Components/Layout/Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
