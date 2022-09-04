import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./AppLayout.styles.scss";
import { AppSider } from "./components/AppSider";
import { Main } from "./components/Main";

const AppLayout: React.FC = () => {
  const { Content, Header } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <AppSider collapsed={collapsed} />
      <Layout className="content-layout">
        <Header className="content-layout-background">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Divider type="vertical" />
        </Header>
        <Content className="content-layout-background">
          <Main />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
