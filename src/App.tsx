import React from "react";
import { Layout } from "antd";
import MainCarousel from "./main_carousel";

const { Header, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>Hello</h1>
      </Header>
      <MainCarousel />
      <Footer style={{ textAlign: "center" }}>
        Sohai Design ©2023 Created by Sohai
      </Footer>
    </Layout>
  );
};

export default App;
