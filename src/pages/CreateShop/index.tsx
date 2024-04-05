import React from "react";
import {Button, Form, Input, TextArea, Toast} from "antd-mobile";
import SNavbar from "@/components/navbar";
import {createShop} from "@/services/projectApi";
import {tokenKey} from "@/utils/constants";

const CreateShop:React.FC = () => {
    const handleSubmit = async (value: any) => {
        try {
            const user: string | null  = localStorage.getItem(tokenKey)
            if (!user) {
                return
            }

            const { user_id } = JSON.parse(user)

            console.log('user_id', user_id)

            const params = {
                shop: {
                    name: value?.name ?? '',
                    description: value?.description ?? '',
                    address: value?.address ?? '',
                    phone_number: value?.phone_number ?? '',
                    business_hours: value?.business_hours ?? '',
                }
            }

            const res = await createShop(params, user_id)

            console.log('res', res)

            if (!res.success) {
                Toast.show(res.message)
                return
            }

            Toast.show(res.message)
        } catch (err) {}
    }

    return (
        <div>
            <SNavbar title='创建店铺' />
            <Form
                layout='horizontal'
                footer={
                    <Button block type='submit' color='primary' fill='solid' size='large'>创建店铺</Button>
                }
                onFinish={handleSubmit}
            >
                <Form.Item
                    name='name'
                    label='店铺名'
                    rules={[{ required: true, message: '店铺名不能为空' }]}
                >
                    <Input placeholder='请输入姓名' />
                </Form.Item>

                <Form.Item name='description' label='描述' help='店铺描述'>
                    <TextArea
                        placeholder='请输入店铺描述'
                        maxLength={200}
                        rows={2}
                        showCount
                    />
                </Form.Item>

                <Form.Item name='address' label='地址' help='详情地址'>
                    <Input placeholder='请输入店铺地址' />
                </Form.Item>

                <Form.Item name='phone_number' label='联系电话'>
                    <Input placeholder='请输入联系电话' />
                </Form.Item>

                <Form.Item name='business_hours' label='营业时间'>
                    <Input placeholder='请输入营业时间' />
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateShop