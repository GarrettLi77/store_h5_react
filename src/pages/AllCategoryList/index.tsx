import React, {useEffect, useState} from "react";
import {allCategories} from "@/services/projectApi";
import {Button, Card, Toast} from "antd-mobile";
import SNavbar from "@/components/navbar";
import {Category} from '@/model/projectModel'
import {formatDate} from "@/utils/simple_fun";
import {history} from "umi";

const AllCategoryList: React.FC = () => {

    const [allCategoryList, setAllCategoryList] = useState<Category[]>([])

    const fetchData = async () => {
        try {
            const res = await allCategories()

            if (!res.success) {
                Toast.show(res.message)
                return
            }
            setAllCategoryList(res.data?.data)
        } catch (error) {
        }
    }

    const onBodyClick = () => {

    }

    const onHeaderClick = () => {

    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <SNavbar title='分类列表' showAdd onTapAddRight={() => {
                history.push('/CreateCategory')
            }}/>
            <div style={{height: 12}}></div>
            {allCategoryList?.map(item => (
                <div key={item?.id} style={{marginBottom: 12, padding: '0px 12px'}}>
                    <Card title={item?.name} onClick={() => {}}>
                        <div>
                            {item?.description}
                        </div>
                        <div>
                            类属店铺：{item?.shop_name}
                        </div>
                        <div>
                             创建时间：{formatDate(item?.created_at)}
                        </div>
                    </Card>
                </div>
            ))
            }
        </div>
    )
}

export default AllCategoryList;