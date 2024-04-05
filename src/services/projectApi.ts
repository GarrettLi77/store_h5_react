import {request} from "@@/exports";

export const login = async (params: any) => {
    return request('api/v1/login.json', {
        method: 'POST', data: {
            ...params
        },
    })
}