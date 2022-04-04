import "antd/dist/antd.css";
import { Layout, Menu, Space, Typography, Radio } from "antd";
import AnyLocationWeatherPanel from "./pages/AnyLocationWeatherPanel";
import "./styles/App.css";
import MyLocationWeather from "./pages/MyLocationWeather";
import { Link, Route, Routes } from "react-router-dom";
import { useMemo, useState } from "react";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [theme, setTheme] = useState("light");

  const options = useMemo(() => {
    return [
      { label: "Light", value: "light" },
      {
        label: "Dark",
        value: "dark",
      },
    ];
  }, []);

  function onThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Title className="logo" level={2}>
          Weather App
        </Title>

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="">My Location</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/bylocation">Any Location</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "10px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 5, minHeight: 380 }}
        >
          <Routes>
            <Route path="/bylocation" element={<AnyLocationWeatherPanel />} />
            <Route path="/" element={<MyLocationWeather />} />
          </Routes>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        <Space>Weather App ©2022 Created by Sumaiya Sultana</Space>
        <Radio.Group
          options={options}
          value={theme}
          optionType="button"
          onChange={onThemeChange}
          style={{ marginLeft: 10 }}
        />
      </Footer>
    </Layout>
  );
}

export default App;
