import {history} from "@@/core/history";
import {NavBar} from "antd-mobile";
import React from "react";
import {SearchOutlined} from "@ant-design/icons";

interface Props {
    title: String,
    onTapSearchRight?: () => void,
    showRight?: boolean,
}

const SNavbar: React.FC<Props> = (props) => {

    const right = () => {
        if (props.showRight && props.onTapSearchRight) {
            return (
                <>
                    <SearchOutlined style={{ fontSize: 18 }} onClick={props.onTapSearchRight} />
                </>
            );
        } else {
            return null;
        }
    }

    return (
        <div style={{backgroundColor: "white"}}>
            <NavBar
                right={right()}
                onBack={() => {
                    history.back();
                }}
            >{props.title}</NavBar>
        </div>
    )
}

export default SNavbar;