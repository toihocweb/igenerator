import React, {useState} from 'react';
import { Layout, Menu, Typography} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';
import Footer from "../Footer/Footer";
import "./sidebar.scss"
import {NavLink} from "react-router-dom";

const { Header, Content, Sider } = Layout;
const {Title} = Typography
const { SubMenu } = Menu;

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo"><Title level={3} style={{color: 'white', marginBottom: 0}}>{collapsed ? "IG" : "IGenerator"}</Title></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <NavLink to="/">
                        Password Generator
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<PieChartOutlined />}>
                    <NavLink to="/random-bytes">
                        Random Bytes
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <NavLink to="/docker-generator">
                        Docker Generator
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileOutlined />}>
                    Kubernetes Generator
                </Menu.Item>
                <Menu.Item key="5" icon={<FileOutlined />}>
                    Nginx Generator
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar