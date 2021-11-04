import React from "react";
import { Layout, Menu } from "antd";

import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Redirect, Route, Switch } from "react-router-dom";
import DockerGenerator from "../DockerGenerator/DockerGenerator";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import RandomBytes from "../RandomBytes/RandomBytes";

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
              <Route path="/" component={PasswordGenerator} exact={true} />
              <Route path="/docker-generator" component={DockerGenerator} />
              <Route path="/random-bytes" component={RandomBytes} />
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
