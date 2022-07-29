import { useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  const location = useLocation();

  let pathname;
  if (location.pathname.length > 1) {
    pathname = location.pathname.replace('/', '');
  } else {
    pathname = "landing";
  }


  return (
    <>
      <MainNavigation />
      <main className={`page ${pathname}`}>{props.children}</main>
    </>
  )
}
