import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ProjectOutlined,
  ContactsOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Footer from "./components/Footer";
import "./index.css";

const { Header, Content } = Layout;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: "Home" },
    { key: "/about", icon: <InfoCircleOutlined />, label: "About" },
    { key: "/students", icon: <ProjectOutlined />, label: "Students" },
    { key: "/contact", icon: <ContactsOutlined />, label: "Contact" },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
    setDrawerOpen(false); // close drawer after navigation
  };

  return (
    <Layout style={{ padding: 0, margin: 0 }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          borderBottom: "1px solid #e8e8e8",
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          padding: "0 34px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1890ff",
          }}>
          Studfolio
        </div>

        {/* ✅ Mobile vs Desktop */}
        {isMobile ? (
          <>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 22 }} />}
              onClick={() => setDrawerOpen(true)}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}>
              <Menu
                mode="vertical"
                selectedKeys={[location.pathname]}
                items={menuItems}
                onClick={handleMenuClick}
              />
            </Drawer>
          </>
        ) : (
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
            overflowedIndicator={null}
            style={{
              border: "none",
              background: "transparent",
              color: "#333333",
              fontWeight: 500,
              fontSize: "16px",
            }}
          />
        )}
      </Header>

      <Content>
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default App;
