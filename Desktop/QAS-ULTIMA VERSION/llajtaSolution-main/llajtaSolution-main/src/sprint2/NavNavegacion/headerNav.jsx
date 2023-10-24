import React, { useState } from 'react';
import { Layout, Menu, theme ,Input } from 'antd';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons'; // Importa los íconos necesarios
import { Link, useLocation } from 'react-router-dom';
import Routes from './Routes';
import './headerNav.css'
import { Content } from 'antd/es/layout/layout';

//Es el mismo Nav de navegacion, se le quito el submenu de platillos tradicionales
const { Header, Footer } = Layout;
const { SubMenu } = Menu;

const App2 = () => {
  const [searchedText, setSearchedText] = useState("")

  const [openSubMenu, setOpenSubMenu] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const items1 = ['Home', 'Platillos Tradicionales'];

  return (
    <Layout className="layout">
      <Header div className="header" >

        <Menu theme="none" mode="horizontal" >
        <div >
          <Menu.Item key="Home" className={location.pathname === '/' ? 'selected-menu-item' : ''} >
            <Link to="/" className='white-text'>
              <HomeOutlined/> Home
            </Link> 
          </Menu.Item>     
          
          <Menu.Item  key="Platillos Tradicionales" 
            className={location.pathname === '/menu-platillos' ? 'selected-menu-item' : ''}>
            <Link to="/menu-platillos" className='white-text'>
            <UnorderedListOutlined /> Platillos Tradicionales
              </Link>
          </Menu.Item>
          
          </div>
         {/* 
          <div className="menu-search-container">
          <Input.Search
              onSearch={(value) => {
                setSearchedText(value)
              }}
            />
          </div>
          */}
          
        </Menu>
      </Header>
      <Content className='content'>
        <Routes/>
      </Content>
    </Layout>
    
  );
};

export default App2;
