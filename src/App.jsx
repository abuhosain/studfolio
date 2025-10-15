import React from 'react';

import { Outlet, useNavigate, useLocation } from 'react-router';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ProjectOutlined,
  ContactsOutlined
} from '@ant-design/icons';
import Footer from './components/Footer';

const { Header, Content } = Layout;
import './index.css';
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: 'About',
    },
    {
      key: '/students',
      icon: <ProjectOutlined />,
      label: 'Students',
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: 'Contact',
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ padding: "0", margin: "0" }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#ffffff',
          borderBottom: '1px solid #e8e8e8',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          padding: '0 34px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1890ff',
            marginRight: '48px'
          }}
        >
          Studfolio
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            background: 'transparent',
            color: '#333333'
          }}
        />
      </Header>

      <Content>
        <div style={{ width: '100%', }}>
          <Outlet />
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default App;