import {request} from "@@/exports";

export const login = async (params: any) => {
    return request('login.json', {
        method: 'POST', data: {
            ...params
        },
    })
}

export const createShop = async (params: any, userId: number) => {
    return request(`users/${userId}/shops.json`, {
        method: 'POST', data: {
            ...params
        },
    })
}

export const allShops = async () => {
    return request('all_shops.json', {
        method: 'GET'
    })
}

export const userShops = async (userId: number) => {
    console.log('userId', userId)
    return request(`users/${userId}/shops.json`, {
        method: 'GET'
    })
}