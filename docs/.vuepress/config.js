// .vuepress/config.js
module.exports = {
    navbar:true,
    title:'天涯若比邻',
    description:'贾浅浅的屎尿体风格体诗真是太香了',
    sidebar:'auto',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean


        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
    }
    }

