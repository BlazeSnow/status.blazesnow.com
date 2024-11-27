import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "BlazeSnow网站状态",
  description: "BlazeSnow网站状态",
  head: [
    //网页logo
    ['link',
      { rel: 'icon', href: '/logo.ico' }
    ],
  ],
  themeConfig: {
    logo: '/logo.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlazeSnow/status.blazesnow.com' }
    ],
    footer: {
      message: '本网站以<a href="/gpl-3.0.txt" target="_blank">GNU General Public License v3.0</a>的条款发布。',
      copyright: 'Copyright © 2024 <a href="https://github.com/BlazeSnow" target="_blank">BlazeSnow</a>. 保留所有权利。'
    },
  }
})
