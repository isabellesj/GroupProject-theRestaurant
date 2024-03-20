import { Outlet } from "react-router";
import { Footer } from "../components/Footer";

import "./../scss/pagesIndex.scss";
import { PagesNavigation } from "../components/PageNavigation";

export const PagesLayout = () => {
  return (
    <>
      <header>
        <PagesNavigation />
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
