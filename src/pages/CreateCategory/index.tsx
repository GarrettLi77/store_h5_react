import React from "react";
import {Button, Form, Input, TextArea, Toast} from "antd-mobile";
import SNavbar from "@/components/navbar";
import {createCategory, createShop} from "@/services/projectApi";
import {tokenKey} from "@/utils/constants";

const CreateCategory:React.FC = () => {
    const handleSubmit = async (value: any) => {
        try {
            const user: string | null  = localStorage.getItem(tokenKey)
            if (!user) {
                return
            }

            const { user_id } = JSON.parse(user)

            console.log('user_id', user_id)

            const params = {
                category: {
                    name: value?.name ?? '',
                    description: value?.description ?? '',
                    shop_id: 1,
                }
            }

            const res = await createCategory(params, user_id)

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
            <SNavbar title='创建分类' />
            <Form
                layout='horizontal'
                footer={
                    <Button block type='submit' color='primary' fill='solid' size='large'>创建分类</Button>
                }
                onFinish={handleSubmit}
            >
                <Form.Item
                    name='name'
                    label='分类名'
                    rules={[{ required: true, message: '分类名不能为空' }]}
                >
                    <Input placeholder='请输入姓名' />
                </Form.Item>

                <Form.Item name='description' label='描述' help='分类描述'>
                    <TextArea
                        placeholder='请输入分类描述'
                        maxLength={200}
                        rows={2}
                        showCount
                    />
                </Form.Item>


            </Form>
        </div>
    )
}

export default CreateCategory