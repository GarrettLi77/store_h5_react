import React from "react";
import {ErrorBlock} from "antd-mobile";
import SNavbar from "@/components/navbar";

const NotFound: React.FC = () => {
    return (
        <div>
            <SNavbar title='未找到该页面' />
            <div style={{
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ErrorBlock status='empty'/>
            </div>
        </div>
    )
}

export default NotFound;