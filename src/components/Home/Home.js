import React from "react";
import { Layout, Menu } from "antd";

import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Redirect, Route, Switch } from "react-router-dom";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import RandomBytes from "../RandomBytes/RandomBytes";
import { routes } from "../routes";

const { Header, Content } = Layout;

function Home(props) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={!!route.exact}
                />
              ))}
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Home;
