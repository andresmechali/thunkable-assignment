import React from "react";
import { ConfigProvider } from "antd";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <ConfigProvider>
      <div className="bg-gray-light h-screen w-full flex flex-col items-center">
        <Navbar />
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
