export default {
    singular: true,

    // 引入插件
    plugins: [
        ['umi-plugin-react', {
            // umi-plugin-react插件的配置
            // 引入ant design
            antd: true,
            dva: true,
            // locale: {
            //     enable: true,
            // },
        }]
    ],

    // 通过配置修改组件默认的路由地址规则
    // 其中，path 表示页面访问路径，component 表示 page 下的文件名，比如 App, User 分别表示 page/App，page/User
    // 如果没有该配置，默认的路由规则为组件的文件
    routes: [
        {
            // 使用 Layout 的页面，配置嵌套路由
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: '/helloworld',
                    component: 'HelloWorld'
                },
                {
                    path: '/content',
                    component: 'Content'
                },
                {
                    path: '/square',
                    component: 'Square'
                },
                {
                    path: '/clock',
                    component: 'Clock'
                },
                {
                    path: '/demo',
                    component: 'Demo'
                },
                {
                    path: '/tabDemo',
                    component: 'TabDemo'
                },
                {
                    path: '/treeDemo',
                    component: 'TreeDemo'
                },
                {
                    path: '/puzzleCard',
                    component: './PuzzleCardsPage'
                },
                {
                    path: '/puzzleCard2',
                    component: './PuzzleCardsPage2'
                },
                {
                    path: '/list',
                    component: 'List'
                },

            ]
        },
    ],

    // 配置请求代理
    // mock 请求的优先级高于代理
    proxy: {
        // 配置的含义是：去往本地服务器 localhost:8000 的 ajax 调用中，
        // 如果是以 /dev 开头的，那么就转发到远端的 https://08ad1pao69.execute-api.us-east-1.amazonaws.com 服务器当中，
        // /dev 也会保留在转发地址中。比如：
        // /dev/random_joke 就会被转发到 https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke
        '/dev': {
            target: 'http://official-joke-api.appspot.com/',
            changeOrigin: true,
            // 将请求中的 "/dev" 替换成空字符串 ""
            pathRewrite: {"^/dev": ""},
        }
    }

}