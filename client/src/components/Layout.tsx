import { Outlet } from "react-router";
import { Header } from "./Header";

export function Layout() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}
