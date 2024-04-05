import {history} from "@@/core/history";
import {NavBar} from "antd-mobile";
import React from "react";

interface Props {
    title: String
}

const SNavbar:React.FC<Props> = (props) => {
    return (
        <NavBar onBack={() => {history.back();}}>{props.title}</NavBar>
    )
}

export default  SNavbar;