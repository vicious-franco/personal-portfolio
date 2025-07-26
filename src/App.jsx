import React from "react";
import Hero from "./Components/Hero";
import ContextProvider from "./GlobalContext/GlobalContext";
import ScrollProgress from "./Components/ScrollProgress";
const App = () => {
  return (
    <div className="w-full ">
      <ContextProvider>
        <Hero />
      </ContextProvider>
      <ScrollProgress />
    </div>
  );
};

export default App;
