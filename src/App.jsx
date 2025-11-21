import { useState } from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Menu from "./components/Menu";
import Order from "./components/Order";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleMenuClick = () => setCurrentPage("menu");
  const handleOrderClick = () => setCurrentPage("order");
  const handleAboutClick = () => setCurrentPage("about");
  const handleContactClick = () => setCurrentPage("contact");
  const handleHomeClick = () => setCurrentPage("home");

  return (
    <>
      <Navbar
        onMenuClick={handleMenuClick}
        onOrderClick={handleOrderClick}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
        onHomeClick={handleHomeClick}
      />

      {currentPage === "home" && (
        <main className="frontpage">
          <div className="content">
            <Hero />
            <Grid
              onMenuClick={handleMenuClick}
              onOrderClick={handleOrderClick}
              onAboutClick={handleAboutClick}
            />
          </div>
        </main>
      )}

      {currentPage === "menu" && <Menu />}
      {currentPage === "order" && <Order />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </>
  );
}
