import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { HIDE_HEADER_FOOTER_ROUTES } from "../constants/routes";

export default function MainLayout() {
  const location = useLocation();
  const hideHeaderFooter = HIDE_HEADER_FOOTER_ROUTES.includes(
    location.pathname
  );
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
