import React from "react";
import Hero from "./Components/Hero";
import ContextProvider from "./GlobalContext/GlobalContext";
import ScrollProgress from "./Components/ScrollProgress";
import MsgSentToast from "./Components/MsgSentToast";
const App = () => {
  return (
    <div className=" max-w-screen ">
      <ContextProvider>
        <Hero />
        <MsgSentToast />
      </ContextProvider>
      <ScrollProgress />
    </div>
  );
};

export default App;
