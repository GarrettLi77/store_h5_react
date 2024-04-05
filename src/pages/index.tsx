import React, {useEffect} from "react";
import { tokenKey } from "@/utils/constants";
import { history } from 'umi';

const Index:React.FC = () => {

    useEffect(() => {
        const user:string | null = localStorage.getItem(tokenKey);
        if (user) {
            history.push('/Home');
        } else {
            history.push('/Login');
        }
    }, []);

    return (
        <></>
    )
}

export default  Index;