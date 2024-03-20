import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import "./../scss/index.scss";
import "./../scss/navigation.scss";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
