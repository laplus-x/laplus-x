import { Outlet } from "react-router";

import Copyright from "./Copyright";
import Navbar from "./Navbar";

export const Layout = () => (
  <div className="bg-[#FEFBFB] min-h-screen text-gray-100">
    <Navbar />
    <main className="pt-20">
      <Outlet />
    </main>
    <Copyright />
  </div>
);
