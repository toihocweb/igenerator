import React, { useState } from "react";
import Card from "../Card/Card";
import { Form, Input, Button, Tooltip } from "antd";

function DockerGenerator(props) {
  const [config, setConfig] = useState({});

  const handleChange = (field, data) => {
    setConfig({
      ...config,
      [field]: data,
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: 700 }}>
        <div id="docker-generator">
          <Form.Item label="Image Name" name="image">
            <Tooltip placement="top" title="your image name + tag">
              <Input
                value={config.image}
                onChange={(e) => handleChange("image", e.target.value)}
                placeholder="ex: node:alpine"
              />
            </Tooltip>
          </Form.Item>
          <Form.Item label="Workdir" name="workdir">
            <Tooltip placement="top" title="your workdir of image">
              <Input
                value={config.workdir}
                onChange={(e) => handleChange("workdir", e.target.value)}
                placeholder="ex: /app"
              />
            </Tooltip>
          </Form.Item>
          <Form.Item label="Copy" name="copy">
            <Tooltip
              placement="top"
              title="Copy files, plz copy manual if use more"
            >
              <Input
                value={config.copy}
                onChange={(e) => handleChange("copy", e.target.value)}
                placeholder="ex: package.json ./"
              />
            </Tooltip>
          </Form.Item>
          <Form.Item label="Run" name="run">
            <Tooltip
              placement="top"
              title="Run scripts, plz copy manual if use more"
            >
              <Input
                value={config.run}
                onChange={(e) => handleChange("run", e.target.value)}
                placeholder="ex: npm i"
              />
            </Tooltip>
          </Form.Item>
          <Form.Item label="Port" name="port">
            <Tooltip placement="top" title="Port">
              <Input
                value={config.port}
                onChange={(e) => handleChange("port", e.target.value)}
                placeholder="ex: 3000"
              />
            </Tooltip>
          </Form.Item>
          <Form.Item label="CMD" name="cmd">
            <Tooltip placement="top" title="script to run">
              <Input
                value={config.cmd}
                onChange={(e) => handleChange("cmd", e.target.value)}
                placeholder='ex: ["npm", "start"]'
              />
            </Tooltip>
          </Form.Item>
          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Generate Docker
            </Button>
          </Form.Item>
        </div>
      </Card>
      <Card
        style={{
          width: 700,
          background: "#333",
          color: "white",
          marginLeft: 20,
        }}
      >
        <div className="content" style={{ marginBottom: 5 }}>
          {config.image ? `FROM ${config.image}` : ""}
        </div>
        <div className="content" style={{ marginBottom: 5 }}>
          {config.workdir ? `WORKDIR ${config.workdir}` : ""}
        </div>

        <div className="content" style={{ marginBottom: 5 }}>
          {config.copy ? `COPY ${config.copy}` : ""}
        </div>

        <div className="content" style={{ marginBottom: 5 }}>
          {config.run ? `RUN ${config.run}` : ""}
        </div>
        <div className="content" style={{ marginBottom: 5 }}>
          {config.port ? `EXPOSE ${config.port}` : ""}
        </div>
        <div className="content" style={{ marginBottom: 5 }}>
          {config.cmd ? `CMD ${config.cmd}` : ""}
        </div>
      </Card>
    </div>
  );
}

export default DockerGenerator;
