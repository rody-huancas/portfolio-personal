import { Outlet } from "react-router-dom";
// Componentes
import { Header } from "@components";

export const Layout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[75rem] h-[38rem] flex justify-center gap-5">
        <Header />
        <main className="w-full rounded-lg p-5 bg-white shadow-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
