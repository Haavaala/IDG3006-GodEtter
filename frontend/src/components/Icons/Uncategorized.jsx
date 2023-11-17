import React from 'react';
import './icons.css';

export default function Uncategorized({size}) {


    const svgSizeStyle = size === 'big' ? 'svg-big' : 'svg-small'

    const width = size !== 'big' ? '64' : '90'

    const height = size !== 'big' ? '64' : '90'
    
    const viewBox = size !== 'big' ? '0 0 64 64' : '0 0 90 90'

    return (
        <>
        <svg className={svgSizeStyle} width='64' height='64' viewBox='0 0 64 64' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6662 48.0008C10.9491 48.0008 11.2204 47.8884 11.4205 47.6884C11.6205 47.4884 11.7329 47.2171 11.7329 46.9342V40.5344C11.7329 40.2515 11.6205 39.9802 11.4205 39.7802C11.2204 39.5801 10.9491 39.4678 10.6662 39.4678C10.3834 39.4678 10.1121 39.5801 9.91202 39.7802C9.71199 39.9802 9.59961 40.2515 9.59961 40.5344V46.9342C9.59961 47.2171 9.71199 47.4884 9.91202 47.6884C10.1121 47.8884 10.3834 48.0008 10.6662 48.0008Z" fill="black"/>
        <path d="M62.9312 27.7346H48.2742L38.1771 2.03262C37.9067 1.34625 37.4076 0.774328 36.7641 0.413585C36.1206 0.0528413 35.3723 -0.0745801 34.6457 0.0528718C33.9191 0.180324 33.2588 0.554826 32.7765 1.11304C32.2942 1.67125 32.0195 2.3789 31.9989 3.11632C31.9796 2.37813 31.7056 1.66934 31.2234 1.11012C30.7411 0.550912 30.0803 0.175704 29.353 0.0481245C28.6256 -0.0794545 27.8766 0.0484488 27.2328 0.410145C26.589 0.771842 26.0901 1.34507 25.8207 2.03262L15.7236 27.7346H1.06663C0.783743 27.7346 0.512441 27.8469 0.312409 28.047C0.112377 28.247 0 28.5183 0 28.8012V35.201C0.000248769 35.4589 0.0939519 35.708 0.263758 35.9022C0.433564 36.0963 0.66797 36.2223 0.923569 36.2569L3.94227 60.4059C4.19839 62.4549 6.01953 64 8.17866 64H55.8192C57.9783 64 59.7995 62.4549 60.0556 60.4059L63.0743 36.2569C63.3299 36.2223 63.5643 36.0963 63.7341 35.9022C63.9039 35.708 63.9976 35.4589 63.9978 35.201V28.8012C63.9978 28.5183 63.8855 28.247 63.6854 28.047C63.4854 27.8469 63.2141 27.7346 62.9312 27.7346ZM34.2211 2.77646C34.3054 2.58314 34.4452 2.41917 34.6227 2.30526C34.8002 2.19135 35.0075 2.13263 35.2184 2.13651C35.4293 2.14039 35.6343 2.2067 35.8075 2.32707C35.9807 2.44743 36.1143 2.61644 36.1914 2.81273L47.5345 31.6856L45.549 32.4656L34.2062 3.5927C34.1545 3.46244 34.1292 3.3232 34.1317 3.18308C34.1343 3.04296 34.1647 2.90475 34.2211 2.77646ZM43.9125 34.1343H20.0853L21.7614 29.8678H42.2364L43.9125 34.1343ZM31.7773 4.37281C31.9119 4.0316 31.9868 3.66982 31.9989 3.30324C32.011 3.66982 32.086 4.0316 32.2205 4.37281L41.3986 27.7346H22.5992L31.7773 4.37281ZM27.8064 2.81286C27.8562 2.68055 27.9318 2.55945 28.0288 2.45662C28.1258 2.35378 28.2423 2.27126 28.3715 2.21384C28.5007 2.15642 28.64 2.12526 28.7813 2.12216C28.9227 2.11906 29.0632 2.1441 29.1948 2.1958C29.3264 2.2475 29.4463 2.32485 29.5478 2.42333C29.6492 2.52182 29.73 2.63949 29.7856 2.7695C29.8411 2.8995 29.8702 3.03925 29.8713 3.18062C29.8723 3.32199 29.8453 3.46215 29.7917 3.59297L18.4488 32.4656L16.4633 31.6856L27.8064 2.81286ZM2.13326 29.8678H14.8855L14.0878 31.8983C13.9844 32.1616 13.9898 32.4552 14.1028 32.7145C14.2159 32.9738 14.4273 33.1776 14.6906 33.281L16.8624 34.1343H2.13326V29.8678ZM57.9387 60.1413C57.8158 61.125 56.9046 61.8667 55.8188 61.8667H8.17866C7.09323 61.8667 6.18206 61.125 6.05873 60.1413L3.07483 36.2676H60.923L57.9387 60.1413ZM61.8646 34.1343H47.1355L49.3073 33.281C49.5706 33.1776 49.782 32.9738 49.895 32.7145C50.0081 32.4552 50.0135 32.1616 49.9101 31.8983L49.1123 29.8678H61.8646V34.1343Z" fill="black"/>
        <path d="M10.6662 58.6668C10.9491 58.6668 11.2204 58.5545 11.4205 58.3544C11.6205 58.1544 11.7329 57.8831 11.7329 57.6002V51.2004C11.7329 50.9175 11.6205 50.6462 11.4205 50.4462C11.2204 50.2462 10.9491 50.1338 10.6662 50.1338C10.3834 50.1338 10.1121 50.2462 9.91202 50.4462C9.71199 50.6462 9.59961 50.9175 9.59961 51.2004V57.6002C9.59961 57.8831 9.71199 58.1544 9.91202 58.3544C10.1121 58.5545 10.3834 58.6668 10.6662 58.6668Z" fill="black"/>
        <path d="M14.9328 48.0008C15.2157 48.0008 15.487 47.8884 15.6871 47.6884C15.8871 47.4884 15.9995 47.2171 15.9995 46.9342V40.5344C15.9995 40.2515 15.8871 39.9802 15.6871 39.7802C15.487 39.5801 15.2157 39.4678 14.9328 39.4678C14.65 39.4678 14.3787 39.5801 14.1786 39.7802C13.9786 39.9802 13.8662 40.2515 13.8662 40.5344V46.9342C13.8662 47.2171 13.9786 47.4884 14.1786 47.6884C14.3787 47.8884 14.65 48.0008 14.9328 48.0008Z" fill="black"/>
        <path d="M14.9328 58.6668C15.2157 58.6668 15.487 58.5545 15.6871 58.3544C15.8871 58.1544 15.9995 57.8831 15.9995 57.6002V51.2004C15.9995 50.9175 15.8871 50.6462 15.6871 50.4462C15.487 50.2462 15.2157 50.1338 14.9328 50.1338C14.65 50.1338 14.3787 50.2462 14.1786 50.4462C13.9786 50.6462 13.8662 50.9175 13.8662 51.2004V57.6002C13.8662 57.8831 13.9786 58.1544 14.1786 58.3544C14.3787 58.5545 14.65 58.6668 14.9328 58.6668Z" fill="black"/>
        <path d="M19.1994 48.0008C19.4823 48.0008 19.7536 47.8884 19.9537 47.6884C20.1537 47.4884 20.2661 47.2171 20.2661 46.9342V40.5344C20.2661 40.2515 20.1537 39.9802 19.9537 39.7802C19.7536 39.5801 19.4823 39.4678 19.1994 39.4678C18.9166 39.4678 18.6453 39.5801 18.4452 39.7802C18.2452 39.9802 18.1328 40.2515 18.1328 40.5344V46.9342C18.1328 47.2171 18.2452 47.4884 18.4452 47.6884C18.6453 47.8884 18.9166 48.0008 19.1994 48.0008Z" fill="black"/>
        <path d="M19.1994 58.6668C19.4823 58.6668 19.7536 58.5545 19.9537 58.3544C20.1537 58.1544 20.2661 57.8831 20.2661 57.6002V51.2004C20.2661 50.9175 20.1537 50.6462 19.9537 50.4462C19.7536 50.2462 19.4823 50.1338 19.1994 50.1338C18.9166 50.1338 18.6453 50.2462 18.4452 50.4462C18.2452 50.6462 18.1328 50.9175 18.1328 51.2004V57.6002C18.1328 57.8831 18.2452 58.1544 18.4452 58.3544C18.6453 58.5545 18.9166 58.6668 19.1994 58.6668Z" fill="black"/>
        <path d="M23.466 48.0008C23.7489 48.0008 24.0202 47.8884 24.2203 47.6884C24.4203 47.4884 24.5327 47.2171 24.5327 46.9342V40.5344C24.5327 40.2515 24.4203 39.9802 24.2203 39.7802C24.0202 39.5801 23.7489 39.4678 23.466 39.4678C23.1832 39.4678 22.9119 39.5801 22.7118 39.7802C22.5118 39.9802 22.3994 40.2515 22.3994 40.5344V46.9342C22.3994 47.2171 22.5118 47.4884 22.7118 47.6884C22.9119 47.8884 23.1832 48.0008 23.466 48.0008Z" fill="black"/>
        <path d="M23.466 58.6668C23.7489 58.6668 24.0202 58.5545 24.2203 58.3544C24.4203 58.1544 24.5327 57.8831 24.5327 57.6002V51.2004C24.5327 50.9175 24.4203 50.6462 24.2203 50.4462C24.0202 50.2462 23.7489 50.1338 23.466 50.1338C23.1832 50.1338 22.9119 50.2462 22.7118 50.4462C22.5118 50.6462 22.3994 50.9175 22.3994 51.2004V57.6002C22.3994 57.8831 22.5118 58.1544 22.7118 58.3544C22.9119 58.5545 23.1832 58.6668 23.466 58.6668Z" fill="black"/>
        <path d="M40.532 48.0008C40.8149 48.0008 41.0862 47.8884 41.2862 47.6884C41.4862 47.4884 41.5986 47.2171 41.5986 46.9342V40.5344C41.5986 40.2515 41.4862 39.9802 41.2862 39.7802C41.0862 39.5801 40.8149 39.4678 40.532 39.4678C40.2491 39.4678 39.9778 39.5801 39.7777 39.7802C39.5777 39.9802 39.4653 40.2515 39.4653 40.5344V46.9342C39.4653 47.2171 39.5777 47.4884 39.7777 47.6884C39.9778 47.8884 40.2491 48.0008 40.532 48.0008Z" fill="black"/>
        <path d="M40.532 58.6668C40.8149 58.6668 41.0862 58.5545 41.2862 58.3544C41.4862 58.1544 41.5986 57.8831 41.5986 57.6002V51.2004C41.5986 50.9175 41.4862 50.6462 41.2862 50.4462C41.0862 50.2462 40.8149 50.1338 40.532 50.1338C40.2491 50.1338 39.9778 50.2462 39.7777 50.4462C39.5777 50.6462 39.4653 50.9175 39.4653 51.2004V57.6002C39.4653 57.8831 39.5777 58.1544 39.7777 58.3544C39.9778 58.5545 40.2491 58.6668 40.532 58.6668Z" fill="black"/>
        <path d="M44.7986 48.0008C45.0815 48.0008 45.3528 47.8884 45.5528 47.6884C45.7528 47.4884 45.8652 47.2171 45.8652 46.9342V40.5344C45.8652 40.2515 45.7528 39.9802 45.5528 39.7802C45.3528 39.5801 45.0815 39.4678 44.7986 39.4678C44.5157 39.4678 44.2444 39.5801 44.0443 39.7802C43.8443 39.9802 43.7319 40.2515 43.7319 40.5344V46.9342C43.7319 47.2171 43.8443 47.4884 44.0443 47.6884C44.2444 47.8884 44.5157 48.0008 44.7986 48.0008Z" fill="black"/>
        <path d="M44.7986 58.6668C45.0815 58.6668 45.3528 58.5545 45.5528 58.3544C45.7528 58.1544 45.8652 57.8831 45.8652 57.6002V51.2004C45.8652 50.9175 45.7528 50.6462 45.5528 50.4462C45.3528 50.2462 45.0815 50.1338 44.7986 50.1338C44.5157 50.1338 44.2444 50.2462 44.0443 50.4462C43.8443 50.6462 43.7319 50.9175 43.7319 51.2004V57.6002C43.7319 57.8831 43.8443 58.1544 44.0443 58.3544C44.2444 58.5545 44.5157 58.6668 44.7986 58.6668Z" fill="black"/>
        <path d="M49.0652 48.0008C49.3481 48.0008 49.6194 47.8884 49.8194 47.6884C50.0194 47.4884 50.1318 47.2171 50.1318 46.9342V40.5344C50.1318 40.2515 50.0194 39.9802 49.8194 39.7802C49.6194 39.5801 49.3481 39.4678 49.0652 39.4678C48.7823 39.4678 48.511 39.5801 48.3109 39.7802C48.1109 39.9802 47.9985 40.2515 47.9985 40.5344V46.9342C47.9985 47.2171 48.1109 47.4884 48.3109 47.6884C48.511 47.8884 48.7823 48.0008 49.0652 48.0008Z" fill="black"/>
        <path d="M49.0652 58.6668C49.3481 58.6668 49.6194 58.5545 49.8194 58.3544C50.0194 58.1544 50.1318 57.8831 50.1318 57.6002V51.2004C50.1318 50.9175 50.0194 50.6462 49.8194 50.4462C49.6194 50.2462 49.3481 50.1338 49.0652 50.1338C48.7823 50.1338 48.511 50.2462 48.3109 50.4462C48.1109 50.6462 47.9985 50.9175 47.9985 51.2004V57.6002C47.9985 57.8831 48.1109 58.1544 48.3109 58.3544C48.511 58.5545 48.7823 58.6668 49.0652 58.6668Z" fill="black"/>
        <path d="M53.3318 48.0008C53.6147 48.0008 53.886 47.8884 54.086 47.6884C54.286 47.4884 54.3984 47.2171 54.3984 46.9342V40.5344C54.3984 40.2515 54.286 39.9802 54.086 39.7802C53.886 39.5801 53.6147 39.4678 53.3318 39.4678C53.0489 39.4678 52.7776 39.5801 52.5775 39.7802C52.3775 39.9802 52.2651 40.2515 52.2651 40.5344V46.9342C52.2651 47.2171 52.3775 47.4884 52.5775 47.6884C52.7776 47.8884 53.0489 48.0008 53.3318 48.0008Z" fill="black"/>
        <path d="M53.3318 58.6668C53.6147 58.6668 53.886 58.5545 54.086 58.3544C54.286 58.1544 54.3984 57.8831 54.3984 57.6002V51.2004C54.3984 50.9175 54.286 50.6462 54.086 50.4462C53.886 50.2462 53.6147 50.1338 53.3318 50.1338C53.0489 50.1338 52.7776 50.2462 52.5775 50.4462C52.3775 50.6462 52.2651 50.9175 52.2651 51.2004V57.6002C52.2651 57.8831 52.3775 58.1544 52.5775 58.3544C52.7776 58.5545 53.0489 58.6668 53.3318 58.6668Z" fill="black"/>
        <path d="M31.9988 48.0008C32.2816 48.0008 32.553 47.8884 32.753 47.6884C32.953 47.4884 33.0654 47.2171 33.0654 46.9342V40.5344C33.0654 40.2515 32.953 39.9802 32.753 39.7802C32.553 39.5801 32.2816 39.4678 31.9988 39.4678C31.7159 39.4678 31.4446 39.5801 31.2445 39.7802C31.0445 39.9802 30.9321 40.2515 30.9321 40.5344V46.9342C30.9321 47.2171 31.0445 47.4884 31.2445 47.6884C31.4446 47.8884 31.7159 48.0008 31.9988 48.0008Z" fill="black"/>
        <path d="M31.9988 58.6668C32.2816 58.6668 32.553 58.5545 32.753 58.3544C32.953 58.1544 33.0654 57.8831 33.0654 57.6002V51.2004C33.0654 50.9175 32.953 50.6462 32.753 50.4462C32.553 50.2462 32.2816 50.1338 31.9988 50.1338C31.7159 50.1338 31.4446 50.2462 31.2445 50.4462C31.0445 50.6462 30.9321 50.9175 30.9321 51.2004V57.6002C30.9321 57.8831 31.0445 58.1544 31.2445 58.3544C31.4446 58.5545 31.7159 58.6668 31.9988 58.6668Z" fill="black"/>
        <path d="M27.7322 48.0008C28.015 48.0008 28.2863 47.8884 28.4864 47.6884C28.6864 47.4884 28.7988 47.2171 28.7988 46.9342V40.5344C28.7988 40.2515 28.6864 39.9802 28.4864 39.7802C28.2863 39.5801 28.015 39.4678 27.7322 39.4678C27.4493 39.4678 27.178 39.5801 26.9779 39.7802C26.7779 39.9802 26.6655 40.2515 26.6655 40.5344V46.9342C26.6655 47.2171 26.7779 47.4884 26.9779 47.6884C27.178 47.8884 27.4493 48.0008 27.7322 48.0008Z" fill="black"/>
        <path d="M27.7322 58.6668C28.015 58.6668 28.2863 58.5545 28.4864 58.3544C28.6864 58.1544 28.7988 57.8831 28.7988 57.6002V51.2004C28.7988 50.9175 28.6864 50.6462 28.4864 50.4462C28.2863 50.2462 28.015 50.1338 27.7322 50.1338C27.4493 50.1338 27.178 50.2462 26.9779 50.4462C26.7779 50.6462 26.6655 50.9175 26.6655 51.2004V57.6002C26.6655 57.8831 26.7779 58.1544 26.9779 58.3544C27.178 58.5545 27.4493 58.6668 27.7322 58.6668Z" fill="black"/>
        <path d="M36.2654 48.0008C36.5482 48.0008 36.8196 47.8884 37.0196 47.6884C37.2196 47.4884 37.332 47.2171 37.332 46.9342V40.5344C37.332 40.2515 37.2196 39.9802 37.0196 39.7802C36.8196 39.5801 36.5482 39.4678 36.2654 39.4678C35.9825 39.4678 35.7112 39.5801 35.5111 39.7802C35.3111 39.9802 35.1987 40.2515 35.1987 40.5344V46.9342C35.1987 47.2171 35.3111 47.4884 35.5111 47.6884C35.7112 47.8884 35.9825 48.0008 36.2654 48.0008Z" fill="black"/>
        <path d="M36.2654 58.6668C36.5482 58.6668 36.8196 58.5545 37.0196 58.3544C37.2196 58.1544 37.332 57.8831 37.332 57.6002V51.2004C37.332 50.9175 37.2196 50.6462 37.0196 50.4462C36.8196 50.2462 36.5482 50.1338 36.2654 50.1338C35.9825 50.1338 35.7112 50.2462 35.5111 50.4462C35.3111 50.6462 35.1987 50.9175 35.1987 51.2004V57.6002C35.1987 57.8831 35.3111 58.1544 35.5111 58.3544C35.7112 58.5545 35.9825 58.6668 36.2654 58.6668Z" fill="black"/>
        </svg>
        </>
    )
}