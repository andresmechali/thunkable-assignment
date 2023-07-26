import React from "react";
import { ConfigProvider } from "antd";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // TODO: colors here
        },
      }}
    >
      <Navbar />
    </ConfigProvider>
  );
}

export default App;
