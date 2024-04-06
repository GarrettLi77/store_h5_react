import React, {useEffect, useState} from "react";
import {Avatar, Dialog, List} from "antd-mobile";
import {bgColor, tokenKey} from "@/utils/constants";
import { SetOutline, UnorderedListOutline, UserOutline} from "antd-mobile-icons";
import {LogoutOutlined, PayCircleOutlined, ShopOutlined, TagOutlined} from "@ant-design/icons";
import {history} from 'umi';

interface UserData {
    username: string,
    email: string,
}

const My: React.FC = () => {

    const [userData, setUserData] = useState<UserData>();

    useEffect(() => {
        const user: string | null = localStorage.getItem(tokenKey);
        if (user) {
            setUserData(JSON.parse(user))
        }

        if (user) {
            history.push('/Home');
        } else {
            history.push('/Login');
        }
    }, []);

    return (
        <div style={{padding: '0px 6px', backgroundColor: bgColor}}>
            <List>
                <List.Item
                    prefix={<Avatar src=''/>}
                    description={userData?.email}
                >
                    {userData?.username}
                </List.Item>
            </List>

            <List header='设置'>
                <List.Item prefix={<ShopOutlined />} onClick={() => {
                    history.push('/MyShops')
                }}>
                    我的店铺
                </List.Item>
                <List.Item prefix={<TagOutlined />} onClick={() => {
                    history.push('/AllCategoryList')
                }}>
                    分类管理
                </List.Item>
                <List.Item prefix={<UserOutline />} onClick={() => {}}>
                    我的信息
                </List.Item>
                <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
                    我的订单
                </List.Item>
                <List.Item prefix={<PayCircleOutlined />} onClick={() => {}}>
                    我的收益
                </List.Item>
                <List.Item prefix={<SetOutline />} onClick={() => {}}>
                    修改密码
                </List.Item>
                <List.Item prefix={<LogoutOutlined />} onClick={() => {
                    Dialog.confirm({
                        content: '是否退出？',
                        onConfirm: () => {
                            localStorage.clear()
                            history.push('/Login')
                        },
                    })
                }}>
                    退出登录
                </List.Item>
            </List>
        </div>
    )
}

export default My