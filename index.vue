<script setup>
import OK from '/status/OK.vue'
import NotGood from '/status/NotGood.vue'
import Review from '/status/Review.vue'
import Bad from '/status/Bad.vue'
import Off from '/status/Off.vue'
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>网页</th>
                <th>状态</th>
                <th>备注</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3">
                    <b>BlazeSnow帮助网站</b>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://blazesnow.com" target="_blank">
                        blazesnow.com
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    主站
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://blazesnow.org" target="_blank">
                        blazesnow.org
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    备用
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://blazesnow.cn" target="_blank">
                        blazesnow.cn
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    粤ICP备2024284878号
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://blazesnow.github.io" target="_blank">
                        blazesnow.github.io
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    GitHub Pages
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://blazesnow.pages.dev" target="_blank">
                        blazesnow.pages.dev
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    Cloudflare Pages
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://blazesnow.vercel.app" target="_blank">
                        blazesnow.vercel.app
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    Vercel
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <b>OneDriveHosts</b>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://onedrivehosts.blazesnow.com" target="_blank">
                        onedrivehosts.blazesnow.com
                    </a>
                </td>
                <td>
                    <OK />
                </td>
                <td>
                    主站
                </td>
            </tr>
        </tbody>
    </table>
</template>