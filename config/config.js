export default {
    singular: true,

    // 引入插件
    plugins: [
        ['umi-plugin-react', {
            // umi-plugin-react插件的配置
        }]
    ],

    // 通过配置修改组件默认路由地址
    routes: [
        {
            path: '/',
            component: './HelloWorld'
        }
    ],


}