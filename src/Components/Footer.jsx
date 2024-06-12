import React from "react";
import Form from "./Form";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <Form/>
      <footer className="mt-20">
        <div className="text-gray-600 dark:text-gray-400 container mx-auto py-6 px-4 flex flex-col justify-center items-center">
          <p>Raphael Oliveira</p>
          <p>Copyrights © 2024 - all rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
