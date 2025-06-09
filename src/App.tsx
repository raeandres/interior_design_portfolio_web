import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/about"
            element={
              <div className="min-h-screen bg-white p-12">
                <h1 className="text-4xl font-light">About Us</h1>
                <p className="mt-4 text-gray-600">
                  Learn more about our interior design philosophy and approach.
                </p>
              </div>
            }
          />
          <Route
            path="/vision"
            element={
              <div className="min-h-screen bg-white p-12">
                <h1 className="text-4xl font-light">Our Vision</h1>
                <p className="mt-4 text-gray-600">
                  Creating beautiful, functional spaces that inspire and
                  delight.
                </p>
              </div>
            }
          />
          <Route
            path="/mission"
            element={
              <div className="min-h-screen bg-white p-12">
                <h1 className="text-4xl font-light">Our Mission</h1>
                <p className="mt-4 text-gray-600">
                  To transform spaces into extraordinary experiences through
                  thoughtful design.
                </p>
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="min-h-screen bg-white p-12">
                <h1 className="text-4xl font-light">Our Services</h1>
                <p className="mt-4 text-gray-600">
                  Comprehensive interior design solutions for residential and
                  commercial spaces.
                </p>
              </div>
            }
          />
        </Routes>
        {/* {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)} */}
      </>
    </Suspense>
  );
}

export default App;
