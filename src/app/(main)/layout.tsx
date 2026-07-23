import { Navbar } from "@/components/shared/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <footer /> */}
    </div>
  );
};

export default layout;
