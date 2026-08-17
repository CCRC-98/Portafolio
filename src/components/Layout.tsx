import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
