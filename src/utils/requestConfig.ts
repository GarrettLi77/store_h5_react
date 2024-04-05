import {tokenKey} from "@/utils/constants";
import {Toast} from "antd-mobile";

export default {
    timeout: 1000,
    baseURL: 'http://127.0.0.1:3000/api/v1/',
    headers: { 'Content-Type': 'application/json' },
    errorConfig: {
        // 错误抛出
        errorThrower: (res: any) => {
            const { success, data, errorCode, errorMessage, showType } = res;
            if (!success) {
                const error: any = new Error(errorMessage);
                error.name = 'BizError';
                error.info = { errorCode, errorMessage, showType, data };
                throw error; // 抛出自制的错误
            }
        },

        // 错误接收及处理
        errorHandler: (error: any, opts: any) => {
            if (error?.response?.status != 200 && error?.response?.data) {
                if (error?.response?.data?.message && Array.isArray(error?.response?.data?.message)) {
                    Toast.show({
                        content: error?.response?.data?.message.join(','),
                        duration: 4000
                    })
                } else {
                    Toast.show({
                        content: error?.response?.data?.message,
                        duration: 4000
                    })

                }
                throw error
            }
        }
    },
    // 请求拦截器
    requestInterceptors: [
        (config: any) => {
            // 拦截请求配置，进行个性化处理。
            const url = config.url.concat('?token = 123');

            const user = localStorage.getItem(tokenKey)
            if (user) {
                const { token } = JSON.parse(user)
                config.headers['Authorization'] = token
            }

            return { ...config};
        }
    ],
    // 响应拦截器
    responseInterceptors: [
        (response: any) => {

            console.log('响应器', response)

            // 拦截响应数据，进行个性化处理
            const { data } = response;

            return response;
        }
    ]
}