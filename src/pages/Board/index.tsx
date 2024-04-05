import React from "react";
import {Card, Space} from "antd-mobile";
import {primaryColor} from "@/utils/constants";
import {HomeOutlined, PayCircleOutlined, ProductOutlined, RightOutlined} from "@ant-design/icons";

const Board: React.FC = () => {
    return (
        <div style={{padding: '12px 16px'}}>
            <div style={{fontSize: 20, fontWeight: "bold"}}>欢迎登录店铺端：）</div>

            <div style={{height: 32}}/>

            <div>
                <Card
                    title='店铺列表'
                    headerStyle={{color: primaryColor}}
                    onClick={() => {
                    }}
                    extra={<RightOutlined style={{fontSize: 16}}/>}
                >
                    <Space style={{display: 'flex', alignContent: 'center'}}>
                        <HomeOutlined style={{fontSize: 18}}/>
                        <div>好久不见！快去看看有什么新鲜东西吧！</div>
                    </Space>
                </Card>

                <div style={{height: 16}}/>

                <Card
                    title='创建店铺'
                    headerStyle={{color: primaryColor}}
                    onClick={() => {
                    }}
                    extra={<RightOutlined style={{fontSize: 16}}/>}
                >
                    <Space style={{display: 'flex', alignContent: 'center'}}>
                        <ProductOutlined style={{fontSize: 18}}/>
                        <div>创建一个属于自己的店铺！</div>
                    </Space>
                </Card>

                <div style={{height: 16}}/>

                <Card
                    title='发布商品'
                    headerStyle={{color: primaryColor}}
                    onClick={() => {
                    }}
                    extra={<RightOutlined style={{fontSize: 16}}/>}
                >
                    <Space style={{display: 'flex', alignContent: 'center'}}>
                        <PayCircleOutlined style={{fontSize: 18}}/>
                        <div>发布商品！开始收益</div>
                    </Space>
                </Card>

            </div>
        </div>
    )
}

export default Board;