import React from "react";
import { ConfigProvider } from "antd";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // TODO: colors here
          colorPrimaryHover: "", // remove default color for button hover
          colorPrimaryActive: "", // remove default color for button active
        },
      }}
    >
      <Navbar />
    </ConfigProvider>
  );
}

export default App;
