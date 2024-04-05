import React from "react";
import {Badge, TabBar} from "antd-mobile";
import {MessageFill, MessageOutline, UserOutline} from "antd-mobile-icons";
import {HomeOutlined, ShoppingCartOutlined} from "@ant-design/icons";

interface Props {
    onTap: (index: string) => void;
}

const BottomBar: React.FC<Props> = (props) => {

    const tabs = [
        {
            key: '0',
            title: '首页',
            icon: <HomeOutlined/>,
            badge: Badge.dot,
        },
        {
            key: '1',
            title: '消息',
            icon: (active: boolean) =>
                active ? <MessageFill/> : <MessageOutline/>,
            badge: '99+',
        },
        {
            key: '2',
            title: '购物车',
            icon: <ShoppingCartOutlined/>,
            badge: '5',
        },
        {
            key: '3',
            title: '我的',
            icon: <UserOutline/>,
        }
    ]

    return (
        <TabBar
            onChange={value => props.onTap(value)}
        >
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
            ))}
        </TabBar>
    )
}

export default BottomBar;