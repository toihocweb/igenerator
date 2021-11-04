import React, { useState } from "react";
import { Input, Tooltip, Button, Form } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "../Card/Card";
import crypto from "crypto";

function RandomBytes(props) {
  const [text, setText] = useState("");
  const [copyToClipboard, setCopyToClipboard] = useState(false);
  const randomBytes = (len = 32) => {
    return crypto.randomBytes(+len).toString("hex");
  };
  const onFinish = (values) => {
    const len = values.length;
    const bytes = randomBytes(len);
    setText(bytes);
    setCopyToClipboard(false);
  };
  return (
    <Card>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          ["length"]: 32,
        }}
      >
        <Form.Item>
          <Input
            value={text}
            placeholder="Result..."
            disabled
            suffix={
              <Tooltip
                placement="right"
                title={copyToClipboard ? "Copied" : "Copy"}
              >
                <CopyToClipboard
                  text={text}
                  onCopy={() => setCopyToClipboard(true)}
                >
                  <CopyOutlined />
                </CopyToClipboard>
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              validator(_, value) {
                if (+value >= 1 && +value <= 1000) {
                  return Promise.resolve();
                }
                return Promise.reject("length should be 1 -> 1000");
              },
            },
          ]}
          label="Length"
          name="length"
        >
          <Input />
        </Form.Item>
        <Button
          onClick={randomBytes}
          style={{ width: "100%", marginTop: 12 }}
          type="primary"
          htmlType="submit"
        >
          Random Bytes
        </Button>
      </Form>
    </Card>
  );
}

export default RandomBytes;
