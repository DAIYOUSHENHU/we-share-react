import React, { useState } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function index() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const itemMap = {
    "/layout/dashboard": "1",
    "/layout/askhelp": "2",
    "/layout/offerhelp": "3",
  }

  const itemChanged = (props) => {
    console.log("itemchaged");
    console.log(props);
    navigate('/layout/'+props)
  };
  const toggleChanged = () => {
    console.log("toggleChanged");
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[itemMap[location.pathname]]}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => itemChanged("dashboard")}
            >
              首页
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => itemChanged("askhelp")}
            >
              寻求帮助
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
              onClick={() => itemChanged("offerhelp")}
            >
              提供帮助
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggleChanged,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

