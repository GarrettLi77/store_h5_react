import React, {useEffect} from "react";
import {allShops} from "@/services/projectApi";

const AllShopList:React.FC = () => {

    const fetchData = async () => {
        try {
            const res = await allShops()

        } catch (error) {}
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <></>
    )
}

export default  AllShopList;