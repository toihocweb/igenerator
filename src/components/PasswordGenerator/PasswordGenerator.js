import React, { useState } from 'react';
import { Form, Input, Button, Switch, Tooltip} from 'antd';
import {
    CopyOutlined
} from '@ant-design/icons';
import "./style.scss"
import generator from "generate-password"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Card from "../Card/Card";

function PasswordGenerator(props) {
    const [lower, setLower] = useState(true);
    const [upper, setUpper] = useState(true);
    const [number, setNumber] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [pw, setPw] = useState('');
    const [copyToClipboard, setCopyToClipboard] = useState(false);


    const [form] = Form.useForm();

    const randomPassword = ({len, lower, upper, number, symbol}) => {
        const pw = generator.generate({
            length: len,
            numbers: number,
            symbols:symbol,
            lowercase: lower,
            uppercase: upper,
            strict: true
        });
        return pw
    }

    const onFinish = (values) => {
        const len = values.length
        const rdPw = randomPassword({len, lower, upper, number, symbol})
        setPw(rdPw)
        setCopyToClipboard(false)
    };

    const onChangeLowercase = value => {
        setLower(value)
    }
    const onChangeUppercase = value => {
        setUpper(value)
    }
    const onChangeNumber = value => {
        setNumber(value)
    }
    const onChangeSymbol = value => {
        setSymbol(value)
    }

    return (
        <Card style={{maxWidth: 400}}>
            <div id="password-generator">
                <Form
                    layout='horizontal'
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
                    initialValues={{
                        ["length"]: 10
                    }}
                >
                    <Form.Item>
                        <Input value={pw} placeholder="Result..." disabled suffix={
                            <Tooltip placement="right" title={copyToClipboard ? "Copied" : "Copy"}>
                                <CopyToClipboard text={pw} onCopy={() => setCopyToClipboard(true)}>
                                    <CopyOutlined />
                                </CopyToClipboard>
                            </Tooltip>
                        }/>
                    </Form.Item>
                        <Form.Item rules={[
                            {
                                validator(_, value) {
                                    if (+value >= 1 && +value <= 1000) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('length should be 1 -> 1000');
                                },
                            },
                        ]} label="Length" name='length'>
                            <Input />
                        </Form.Item>
                    <div className="options">
                        <Form.Item label={'Lowercase'}>
                            <Switch style={{marginLeft: 'auto'}} defaultChecked onChange={onChangeLowercase}/>
                        </Form.Item>
                        <Form.Item  label={'Uppercase'}>
                            <Switch defaultChecked onChange={onChangeUppercase}/>
                        </Form.Item>
                        <Form.Item label={'Number'}>
                            <Switch defaultChecked onChange={onChangeNumber}/>
                        </Form.Item>
                        <Form.Item label={'Symbol'}>
                            <Switch defaultChecked onChange={onChangeSymbol}/>
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button style={{width: '100%'}} type="primary" htmlType="submit">Generate Password</Button>
                    </Form.Item>
                </Form>
        </div>
        </Card>
    );
}

export default PasswordGenerator;