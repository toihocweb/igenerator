import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  KeyOutlined,
  NumberOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

function Sidebar() {
  console.log(window.location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      breakpoint={"sm"}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo">
        <Title level={3} style={{ color: "white", marginBottom: 0 }}>
          {collapsed ? "IG" : "IGenerator"}
        </Title>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/" icon={<KeyOutlined />}>
          <NavLink to="/">Password Generator</NavLink>
        </Menu.Item>
        <Menu.Item key="/random-bytes" icon={<NumberOutlined />}>
          <NavLink to="/random-bytes">Random Bytes</NavLink>
        </Menu.Item>
        {/*<Menu.Item key="/docker-generator" icon={<DeploymentUnitOutlined />}>*/}
        {/*  <NavLink to="/docker-generator">Docker Generator (beta)</NavLink>*/}
        {/*</Menu.Item>*/}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
