import React from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

interface AppSiderProps {
  collapsed: boolean;
}

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "nav 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];

const AppSider: React.FC<AppSiderProps> = ({ collapsed }) => {
  const { Sider } = Layout;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <span className="logo-text">{collapsed ? 'MP' : 'Map TODO'}</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default AppSider;
