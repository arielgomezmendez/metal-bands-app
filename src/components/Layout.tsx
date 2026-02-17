
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SkipLink from "./SkipLink/SkipLink";

const Layout = () => {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
