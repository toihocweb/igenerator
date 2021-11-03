import React, {useState} from 'react';
import { Layout, Menu, Typography} from 'antd';
import {
    KeyOutlined,
    NumberOutlined,
    DeploymentUnitOutlined
} from '@ant-design/icons';
import "./sidebar.scss"
import {NavLink} from "react-router-dom";

const { Sider } = Layout;
const {Title} = Typography

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo"><Title level={3} style={{color: 'white', marginBottom: 0}}>{collapsed ? "IG" : "IGenerator"}</Title></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<KeyOutlined />}>
                    <NavLink to="/">
                        Password Generator
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<NumberOutlined />}>
                    <NavLink to="/random-bytes">
                        Random Bytes
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<DeploymentUnitOutlined />}>
                    <NavLink to="/docker-generator">
                        Docker Generator
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar