import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import { KeyOutlined, NumberOutlined } from "@ant-design/icons";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";

const { Sider } = Layout;
const { Title } = Typography;

function Sidebar() {
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
        {routes.map((route) => (
          <Menu.Item key={route.path} icon={<route.icon />}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
