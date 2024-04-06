import {history} from "@@/core/history";
import {NavBar} from "antd-mobile";
import React from "react";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";

interface Props {
    title: String,
    onTapSearchRight?: () => void,
    showSearch?: boolean,
    onTapAddRight?: () => void,
    showAdd?: boolean,
}

const SNavbar: React.FC<Props> = (props) => {

    const right = () => {
        if (props.showSearch || props.showAdd) {
            return (
                <>
                    {
                        props.showSearch && <SearchOutlined style={{ fontSize: 18 }} onClick={props.onTapSearchRight} />
                    }
                    {
                        props.showAdd && <PlusOutlined style={{ fontSize: 18, marginLeft: 6 }} onClick={props.onTapAddRight} />
                    }
                </>
            )
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