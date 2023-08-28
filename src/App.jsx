import { Routes, Route } from "react-router-dom";

import Navbar from "module/Navbar/Navbar";
import HomePage from 'pages/MainPage/HomePage';
import GalleryPage from "pages/GalleryPage/GalleryPage";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/images/search" element={ <GalleryPage/>} />
        {/* <HomePage>
          <Navbar />
        </HomePage> */}
      </Routes>
    </div>
  );
};
