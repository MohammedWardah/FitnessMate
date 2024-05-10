import { Outlet } from "react-router-dom";

import Footer from "../Components/Layout/Footer";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
