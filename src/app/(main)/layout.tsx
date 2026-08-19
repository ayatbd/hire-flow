import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default layout;
