import { BrowserRouter, Route, Routes } from "react-router-dom";
// layouts
import { Layout } from "@layouts/Layout";
// pages
import { About } from "@pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
