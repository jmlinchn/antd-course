const random_jokes = [
    {
        setup: '1111 - What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    {
        setup: '2222 - To understand what recursion is...',
        punchline: "You must first understand what recursion is",
    },
    {
        setup: '3333 - What do you call a factory that sells passable products?',
        punchline: 'A satisfactory',
    },
];

const list_data = [
    {
        id: 1,
        name: 'umi',
        desc: '极快的类 Next.js 的 React 应用框架',
        url: 'https://umijs.org'
    },
    {
        id: 2,
        name: 'antd',
        desc: '一个服务于企业级产品的设计体系',
        url: 'https://ant.design/index-cn'
    },
    {
        id: 3,
        name: 'antd-pro',
        desc: '一个服务于企业级产品的设计体系',
        url: 'https://ant.design/index-cn'
    }
]

let random_joke_call_count = 0;

export default {
    'get /dev/random_joke': function (req, res) {
        const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
        random_joke_call_count += 1;
        setTimeout(() => {
            res.json(responseObj);
        }, 3000);
    },

    'get /dev/random_joke2': {
        setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },

    'get /dev/random_joke3': function (req, res) {
        res.status(500);
        res.json({});
    },

    'get /dev/list_data': function (req, res) {
        res.json(list_data);
    },
};