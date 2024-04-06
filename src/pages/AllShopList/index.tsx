import React, {useEffect, useState} from "react";
import {allShops} from "@/services/projectApi";
import {Button, Card, Toast} from "antd-mobile";
import {RightOutline} from "antd-mobile-icons";
import styles from './index.less'
import {FieldTimeOutlined, HomeOutlined, PhoneOutlined, ShopOutlined} from "@ant-design/icons";
import SNavbar from "@/components/navbar";
import {Shop} from '@/model/projectModel'

const AllShopList: React.FC = () => {

    const [allShopList, setAllShopList] = useState<Shop[]>([])

    const fetchData = async () => {
        try {
            const res = await allShops()

            if (!res.success) {
                Toast.show(res.message)
                return
            }
            setAllShopList(res.data?.data)
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
            <SNavbar title='店铺列表' showSearch onTapSearchRight={() => {
            }}/>
            <div style={{height: 12}}></div>
            {allShopList?.map(item => (
                <div key={item?.id} style={{marginBottom: 12, padding: '0px 12px'}}>
                    <Card
                        title={
                            <div style={{fontWeight: 'normal'}}>
                                <ShopOutlined style={{marginRight: '4px', color: '#1677ff'}}/>
                                {item?.name}
                            </div>
                        }
                        extra={<RightOutline/>}
                        onBodyClick={onBodyClick}
                        onHeaderClick={onHeaderClick}
                        style={{borderRadius: '16px'}}
                    >
                        <div>
                            {item?.description}

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 6}}>
                                <PhoneOutlined style={{marginRight: '4px', color: '#1677ff'}}/>
                                <a>{item?.phone_number}</a>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 6}}>
                                <FieldTimeOutlined style={{marginRight: '4px', color: '#1677ff'}}/>
                                <div>{item?.business_hours}</div>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 6, marginBottom: 6}}>
                                <HomeOutlined style={{marginRight: '4px', color: '#1677ff'}}/>
                                <div>{item?.address}</div>
                            </div>
                        </div>

                        <div className={styles.footer} onClick={e => e.stopPropagation()}>
                            <Button
                                size='small'
                                color='primary'
                                onClick={() => {
                                    Toast.show('点击了底部按钮')
                                }}
                            >
                                去逛逛
                            </Button>
                        </div>
                    </Card>
                </div>
            ))
            }
        </div>
    )
}

export default AllShopList;