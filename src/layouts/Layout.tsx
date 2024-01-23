import { Outlet } from "react-router-dom";
// Componentes
import { Header } from "@components";

export const Layout = () => {
  return (
    <div className="w-full md:h-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="w-full h-screen lg:max-w-[80%] 2xl:w-[70%] md:h-[42rem] flex flex-col md:flex-row justify-center gap-5 p-5">
        <Header />
        <main className="w-full h-full md:h-full rounded-xl bg-white shadow-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
