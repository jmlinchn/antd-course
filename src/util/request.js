function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 *
 * @param url 请求的url
 * @param options 需要传递的参数
 * @returns {Promise<any>} 包含"data"或"error"的对象
 */
export default async function request(url, options) {
    const response = await fetch(url, options);
    checkStatus(response);
    return await response.json();
};