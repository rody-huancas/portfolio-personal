import { Outlet } from "react-router-dom";
// Componentes
import { Footer, Header } from "@components";

export const Layout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[75rem] h-[38rem] flex justify-between gap-5">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
