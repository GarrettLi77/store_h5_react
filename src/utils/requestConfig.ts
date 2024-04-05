export default {
    timeout: 1000,
    baseURL: 'http://127.0.0.1:3000/',
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
            console.log('error', error, 'opts', opts)
        }
    },
    // 请求拦截器
    requestInterceptors: [
        (config: any) => {
            // 拦截请求配置，进行个性化处理。
            const url = config.url.concat('?token = 123');
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