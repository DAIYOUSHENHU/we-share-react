import React, { useState } from 'react';
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

import Dashboard from "@/views/dashboard"
import Askhelp from "@/views/ask-help/"
import Offerhelp from "@/views/offer-help"

export default function index() {
  const [collapsed, setCollapsed] = useState(false);
  const [itemKey, setItemKey] = useState("1");
  const itemChanged = (props) => {
    console.log("itemchaged");
    console.log(props);
    setItemKey(props)
  };
  const toggleChanged = () => {
    console.log("toggleChanged");
    setCollapsed(!collapsed);
    setItemKey("1")
  };
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[itemKey]}
          >
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=> itemChanged("1")}>
              首页
            </Menu.Item>
            {/* <Menu.Item key="1" icon={<UserOutlined />} onClick={itemChangedTo1}>
              首页
            </Menu.Item> */}
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=> itemChanged("2")}>
              寻求帮助
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=> itemChanged("3")}>
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
            <MyContent itemKey={itemKey}></MyContent>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

function MyContent(props) {
  const keyMap = {
    "1": <Dashboard></Dashboard>,
    "2": <Askhelp></Askhelp>,
    "3": <Offerhelp></Offerhelp>
  }
  return keyMap[props.itemKey]
}

