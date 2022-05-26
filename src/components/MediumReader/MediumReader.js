import React, { useState } from "react";
import { Input, Tooltip, Button, Form } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Card from "../Card/Card";
import crypto from "crypto";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function MediumReader(props) {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const getLink = async () => {
    setLoading(true);
    const url = "http://localhost:5000/medium";
    try {
      const res = await axios.post(url, {
        link,
      });
      const resData = res.data;
      setResult(resData.link);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      toast.error(error.response.data.message);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div>
      <Card style={{ width: "800px" }}>
        <Input
          type="text"
          placeholder="medium link..."
          value={link}
          onChange={handleChange}
        />
        <Button
          loading={loading}
          onClick={getLink}
          type="primary"
          style={{ marginTop: 10 }}
        >
          Get Link
        </Button>
        <div style={{ marginTop: 10 }}>
          {result && (
            <a target={"_blank"} href={result}>
              {result}
            </a>
          )}
        </div>
      </Card>
    </div>
  );
}

export default MediumReader;
