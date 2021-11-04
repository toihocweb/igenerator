import React from "react";
import { Layout } from "antd";

const { Footer: AFooter } = Layout;

function Footer(props) {
  const now = new Date();
  return (
    <AFooter style={{ textAlign: "center" }}>
      IGenerator ©{now.getFullYear()} Created by NB
    </AFooter>
  );
}

export default Footer;
