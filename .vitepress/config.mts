import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: "BlazeSnow网站状态",
    description: "BlazeSnow网站状态",
    head: [
        ['link',
            { rel: 'icon', href: '/logo.ico' }
        ],
    ],
    sitemap: {
        hostname: 'https://status.blazesnow.com/'
    },
    themeConfig: {
        logo: '/logo.ico',
        aside: false,
        outline: false,
        //关掉语言自动路径
        i18nRouting: false,
        //切换深色或浅色模式提示
        darkModeSwitchLabel: '切换深色或浅色模式',
        //切换至浅色模式提示
        lightModeSwitchTitle: '切换至浅色模式',
        //切换至深色模式提示
        darkModeSwitchTitle: '切换至深色模式',
        //目录按钮文字
        sidebarMenuLabel: '目录',
        //回到顶部文字
        returnToTopLabel: '回到顶部',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/BlazeSnow' }
        ],
        notFound: {
            title: '页面未找到',
            quote: '抱歉，没有找到您需要的页面',
            linkLabel: '回到主页',
            linkText: '回到主页',
            code: '404',
        },
        footer: {
            message: '本网站以<a href="/gpl-3.0.txt" target="_blank">GNU General Public License v3.0</a>的条款发布。',
            copyright: 'Copyright © 2024-2025 <a href="https://github.com/BlazeSnow" target="_blank">BlazeSnow</a>. 保留所有权利。'
        },
    }
})
