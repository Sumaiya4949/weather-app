import "antd/dist/antd.css";
import { Layout, Menu, Typography } from "antd";
import { useState } from "react";
import CurrentWeatherPanel from "./components/CurrentWeatherPanel";
import "./styles/App.css";
import MyLocationWeather from "./pages/MyLocationWeather";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [menuKey, setMenuKey] = useState("2");

  const handleMenuChange = (arg) => {
    setMenuKey(arg.key);
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Title className="logo" level={2}>
          Weather App
        </Title>

        <Menu
          onClick={handleMenuChange}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="1">My Location</Menu.Item>
          <Menu.Item key="2">Any Location</Menu.Item>
        </Menu>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {menuKey === "1" ? <MyLocationWeather /> : <CurrentWeatherPanel />}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Weather App ©2022 Created by Sumaiya Sultana
      </Footer>
    </Layout>
  );
}

export default App;
