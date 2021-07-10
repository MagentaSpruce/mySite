import React from "react";

import { ImEarth } from "react-icons/im";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <ImEarth />
      </button>
      <button className="btn" onClick={openModal}>
        🎅
      </button>
    </main>
  );
};

export default Home;
