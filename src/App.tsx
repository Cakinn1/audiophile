import AOS from "aos";
import { useEffect } from "react";
import Nav from "./pages/Nav";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
// ..

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <Nav />
      <Home />
    </div>
  );
}
