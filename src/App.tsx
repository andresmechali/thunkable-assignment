import React from "react";
import { ConfigProvider, Button } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // TODO: colors here
        },
      }}
    >
      <Button>Some button</Button>
    </ConfigProvider>
  );
}

export default App;
