"use client";

import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Home = ({ children }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 1500);
  }, []);
  return (
    <>
      {!showLogo ? (
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </>
      )
    :
      <>
        <div className="h-screen w-full flex items-center justify-center initial_loader_container">
            <img className="w-[800px] initial_loader_anim" src="/loaderlogo.png" alt=""  />
        </div>
      </>
    }
    </>
  );
};

export default Home;
