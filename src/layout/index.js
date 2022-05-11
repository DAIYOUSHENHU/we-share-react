import React, { useState, useEffect } from "react";
import "./index.less";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
const { SubMenu } = Menu;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { getRole, clearToken } from "@/utils/auth";
// import { getToken, setToken, setRole } from "@/utils/auth";

import logo from "@/assets/images/weshare-logo.png";

export default function index() {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState(0);
  useEffect(() => {
    setRole(getRole());
  });
  const navigate = useNavigate();
  const location = useLocation();

  const itemMap = {
    "/layout/dashboard": "1",
    "/layout/sharegood": "2",
    "/layout/askhelp": "3",
    "/layout/offerhelp": "4",
    "/layout/personal": "5",
    "/layout/managegood": "6",
    "/layout/managegood/approvegood": "6-1",
    "/layout/managegood/stategood": "6-2",
    "/layout/managesys": "7",
    "/layout/managesys/usermanage": "7-1",
    "/layout/managesys/organmanage": "7-2",
    "/layout/managesys/organmanage/approveorgan": "7-2-1",
    "/layout/managesys/organmanage/stateorgan": "7-2-2",
    "/layout/managesys/logmanage": "7-3",
    "/layout/managesys/sysinfo": "7-4",
  };

  const itemChanged = (props) => {
    console.log("itemchaged");
    console.log(props);
    navigate("/layout/" + props);
  };
  const toggleChanged = () => {
    console.log("toggleChanged");
    setCollapsed(!collapsed);
  };
  const logout = () => {
    console.log('11')
    clearToken();
    navigate("/");
  };
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img src={logo} style={{ height: "100%", width: "100%" }}></img>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[itemMap[location.pathname]]}
          >
            <Menu.Item
              key="1"
              icon={<ApartmentOutlined />}
              onClick={() => itemChanged("dashboard")}
            >
              首页
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<TeamOutlined />}
              onClick={() => itemChanged("sharegood")}
            >
              共享物资
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<VideoCameraOutlined />}
              onClick={() => itemChanged("askhelp")}
            >
              寻求帮助
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UploadOutlined />}
              onClick={() => itemChanged("offerhelp")}
            >
              提供帮助
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<UserOutlined />}
              onClick={() => itemChanged("personal")}
            >
              个人中心
            </Menu.Item>
            {role == 1 && (
              <SubMenu key="6" icon={<UserOutlined />} title="物资管理">
                <Menu.Item
                  key="6-1"
                  onClick={() => itemChanged("managegood/approvegood")}
                >
                  物资审核
                </Menu.Item>
                <Menu.Item
                  key="6-2"
                  onClick={() => itemChanged("managegood/stategood")}
                >
                  物资状态管理
                </Menu.Item>
              </SubMenu>
            )}
            {role == 2 && (
              <SubMenu key="7" icon={<UserOutlined />} title="系统管理">
                <Menu.Item
                  key="7-1"
                  onClick={() => itemChanged("managesys/usermanage")}
                >
                  用户管理
                </Menu.Item>
                {/* <Menu.Item
                  key="7-2"
                  onClick={() => itemChanged("managesys/organmanage")}
                >
                  组织管理
                </Menu.Item> */}
                <SubMenu key="7-2" title="组织管理">
                  <Menu.Item
                    key="7-2-1"
                    onClick={() => itemChanged("managesys/organmanage/approveorgan")}
                  >
                    组织审核
                  </Menu.Item>
                  <Menu.Item
                    key="7-2-2"
                    onClick={() => itemChanged("managesys/organmanage/stateorgan")}
                  >
                    组织状态管理
                  </Menu.Item>
                </SubMenu>
                <Menu.Item
                  key="7-3"
                  onClick={() => itemChanged("managesys/logmanage")}
                >
                  日志管理
                </Menu.Item>
                <Menu.Item
                  key="7-4"
                  onClick={() => itemChanged("managesys/sysinfo")}
                >
                  系统信息
                </Menu.Item>
              </SubMenu>
            )}
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
            <Button type="danger" className="logout" onClick={() => logout()}>
              退出登录
            </Button>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: "24px 0 24px 24px",
              minHeight: 280,
            }}
          >
            <div className="outlet">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
