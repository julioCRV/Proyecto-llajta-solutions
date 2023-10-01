import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import MyForm from './registrarPlatillo';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons'; // Importa los íconos necesarios
const { Header, Footer } = Layout;
const { SubMenu } = Menu;

const App2 = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items1 = ['Home', 'Platillos Tradicionales'];

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flow',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Platillos Tradicionales']}
        >
          {items1.map((item) => (
            <Menu.Item key={item}>
              {item === 'Home' && <HomeOutlined />} {/* Agrega ícono para Home */}
              {item === 'Platillos Tradicionales' && <UnorderedListOutlined />} {/* Agrega ícono para Platillos Tradicionales */}
              {item}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <MyForm />
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Copyright @ 2023 Llajta Solutions Todos los derechos reservados
      </Footer>
    </Layout>
  );
};

export default App2;
