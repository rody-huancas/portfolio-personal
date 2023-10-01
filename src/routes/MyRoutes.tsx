import { BrowserRouter, Route, Routes } from "react-router-dom";
// layouts
import { Layout } from "@layouts/Layout";
// pages
import { About, Contact, Home, Projects } from "@pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
