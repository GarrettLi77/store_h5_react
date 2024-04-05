import React, {useState} from "react";
import {Form, Button, Input, Image, Toast} from 'antd-mobile';
import logo from '../../assets/rails.png'
import {login} from "@/services/projectApi";
import {EyeInvisibleOutline, EyeOutline} from "antd-mobile-icons";
import styles from './index.less'
import {tokenKey} from "@/utils/constants";
import { history } from 'umi';

const LoginPage: React.FC = () => {
    const [visible, setVisible] = useState(false)

    const handleSubmit = async (value: any) => {
        try {
            const params = {
                email: value.email ?? '',
                password: value.password ?? '',
            }

            const res = await login(params)

            if (!res.success) {
                Toast.show({
                    content: res.message
                })
                return
            }

            localStorage.setItem(tokenKey, JSON.stringify(res.data));

            history.push('/home')

        } catch (err) {
            Toast.show({
                content: '请求失败' + (err as Error).message
            })
        }
    };

    return (
        <>
            <div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30}}>
                    <Image
                        src={logo}
                        width={'80%'}
                        height={120}
                        fit='cover'
                        style={{borderRadius: 4}}
                    />
                    <h2 style={{margin: 24}}>欢迎登录 ：）</h2>
                </div>
                <Form
                    layout='horizontal'
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            登录
                        </Button>
                    }
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name='email'
                        label='邮箱'
                        rules={[{required: true, message: '邮箱不能为空'}]}
                    >
                        <Input clearable placeholder='请输入邮箱'/>
                    </Form.Item>

                    <Form.Item
                        name='password'
                        label='密码'
                        rules={[{required: true, message: '密码不能为空'}]}
                    >
                        {/*<Input type='password' clearable placeholder='请输入密码'/>*/}
                        <div className={styles.password}>
                            <Input
                                className={styles.input}
                                placeholder='请输入密码'
                                type={visible ? 'text' : 'password'}
                            />
                            <div className={styles.eye}>
                                {!visible ? (
                                    <EyeInvisibleOutline onClick={() => setVisible(true)}/>
                                ) : (
                                    <EyeOutline onClick={() => setVisible(false)}/>
                                )}
                            </div>
                        </div>
                    </Form.Item>
                </Form>
                <div style={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-between'}}>
                    <Button color='primary' fill='none'>注册</Button>
                    <Button color='primary' fill='none'>忘记密码？</Button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
