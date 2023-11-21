import React from 'react';
import './icons.css';

export default function Fish({size}) {

    const svgSizeStyle = size === 'big' ? 'svg-big' : 'svg-small'

    const width = size !== 'big' ? '66.21' : '93.1'

    const height = size !== 'big' ? '64' : '90'
    
    const viewBox = size !== 'big' ? '0 0 66.21 64' : '0 0 93.1 90'

    return (
        <>
        <svg className={svgSizeStyle} width='66.21' height='64' viewBox='0 0 66.21 64' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.3105 13.2411C35.9199 13.2411 36.4139 12.747 36.4139 12.1376C36.4139 11.5282 35.9199 11.0342 35.3105 11.0342C34.7011 11.0342 34.207 11.5282 34.207 12.1376C34.207 12.747 34.7011 13.2411 35.3105 13.2411Z" fill="black"/>
            <path d="M46.5931 38.649L46.5614 38.6421C43.5099 38.083 40.4237 37.7328 37.3246 37.5938C38.0148 36.9384 38.5775 36.1608 38.9843 35.3003C39.0292 35.3039 39.0742 35.3077 39.1196 35.3098C39.1363 35.3098 39.153 35.3109 39.1697 35.3109H51.8621C56.3388 35.3109 60.0537 33.8468 62.6048 31.0764C64.9614 28.5174 66.2069 25.0207 66.2069 20.9655C66.2069 20.9348 66.2059 20.9043 66.2057 20.8735H66.2069L66.2057 20.8719C66.1768 17.0851 64.6534 13.4631 61.9671 10.794C59.2807 8.12499 55.6489 6.62505 51.8621 6.62069H27.5862C26.7086 6.6197 25.8671 6.27062 25.2465 5.65002C24.6259 5.02943 24.2768 4.188 24.2759 3.31034V1.10345C24.2759 0.810796 24.1596 0.530129 23.9527 0.323192C23.7457 0.116256 23.4651 0 23.1724 0C22.8798 0 22.5991 0.116256 22.3922 0.323192C22.1852 0.530129 22.069 0.810796 22.069 1.10345V3.31034C22.0707 4.58773 22.5149 5.82508 23.326 6.81188C24.1372 7.79867 25.2652 8.47397 26.5181 8.7229C26.5526 9.22526 26.6136 9.72545 26.7008 10.2214C25.9805 10.526 25.1899 10.6251 24.4167 10.5076C24.0491 10.4521 23.6999 10.3101 23.398 10.0933C23.0961 9.87639 22.85 9.59089 22.68 9.26028L22.0057 7.35586C21.9582 7.21814 21.8839 7.09118 21.7871 6.98231C21.6903 6.87344 21.5729 6.78481 21.4417 6.72154C21.3105 6.65828 21.168 6.62162 21.0225 6.61368C20.8771 6.60575 20.7315 6.6267 20.5942 6.67532C20.4568 6.72394 20.3305 6.79928 20.2224 6.89697C20.1144 6.99467 20.0267 7.1128 19.9646 7.24454C19.9024 7.37629 19.8669 7.51904 19.8602 7.66456C19.8535 7.81008 19.8756 7.9555 19.9254 8.09241L20.6243 10.0663C20.6394 10.1091 20.6572 10.151 20.6775 10.1916C20.9973 10.8407 21.4667 11.4046 22.047 11.8368C22.6273 12.2691 23.302 12.5573 24.0154 12.6778C24.3522 12.7393 24.6938 12.77 25.0361 12.7694C25.7932 12.7642 26.5437 12.6295 27.2553 12.3712C28.2273 15.1981 30.0567 17.6516 32.4887 19.3898C34.9207 21.1281 37.8343 22.0646 40.8237 22.069H40.8284H40.8331H51.8621C52.4557 22.0691 53.0256 22.3023 53.449 22.7185C53.8724 23.1347 54.1154 23.7005 54.1257 24.2941C54.136 24.8877 53.9128 25.4616 53.5041 25.8922C53.0955 26.3228 52.534 26.5757 51.9407 26.5964C51.9324 26.5964 51.9239 26.5964 51.9156 26.5977L39.1194 27.3368C38.828 27.3503 38.5388 27.3954 38.2571 27.4714C37.5394 26.4838 36.5985 25.6796 35.5112 25.1243C34.4239 24.569 33.2209 24.2783 32 24.2759H29.7931C29.5005 24.2759 29.2198 24.3921 29.0128 24.5991C28.8059 24.806 28.6897 25.0867 28.6897 25.3793C28.6904 26.7127 29.0362 28.0231 29.6934 29.1833C30.3505 30.3435 31.2968 31.3138 32.44 32C31.388 32.6323 30.5017 33.506 29.8544 34.5487C29.207 35.5915 28.8172 36.7734 28.7172 37.9967C24.0334 38.8159 19.3902 40.6815 14.8552 43.5732C14.4421 43.8368 14.0522 44.1349 13.6897 44.4644C12.6074 42.6807 11.0838 41.206 9.2658 40.1824C7.44778 39.1588 5.3967 38.621 3.31034 38.6207H1.10345C0.810796 38.6207 0.530129 38.7369 0.323192 38.9439C0.116256 39.1508 0 39.4315 0 39.7241C0.00222943 42.0482 0.670755 44.3229 1.92634 46.2787C3.18192 48.2344 4.97191 49.7892 7.08414 50.7586C4.97191 51.7281 3.18192 53.2828 1.92634 55.2386C0.670755 57.1943 0.00222943 59.469 0 61.7931C0 62.0858 0.116256 62.3664 0.323192 62.5734C0.530129 62.7803 0.810796 62.8966 1.10345 62.8966H3.31034C5.39667 62.8963 7.44773 62.3584 9.26572 61.3348C11.0837 60.3113 12.6073 58.8365 13.6895 57.0528C14.0521 57.3823 14.442 57.6805 14.855 57.944C21.1572 61.9625 27.6681 64 34.2069 64C38.3503 63.9934 42.4848 63.617 46.5612 62.8752L46.593 62.8683C61.2397 59.489 65.8715 51.6386 66.0615 51.3061C66.1568 51.1393 66.2069 50.9506 66.2069 50.7586C66.2069 50.5666 66.1568 50.3779 66.0615 50.2112C65.8715 49.8786 61.2397 42.029 46.5931 38.649ZM57.5763 32.013C54.9927 31.3319 54.3119 29.2406 54.1331 28.1908C55.14 27.6002 55.8743 26.6374 56.1777 25.5102C56.531 25.5383 56.8752 25.5525 57.2102 25.5526C59.5602 25.5684 61.858 24.8596 63.7908 23.5226C63.2007 27.0452 61.317 30.3622 57.5761 32.013H57.5763ZM50.4 19.8621H43.6436C44.3165 18.9663 44.8373 17.9658 45.1848 16.9007C45.2307 16.7632 45.249 16.618 45.2387 16.4735C45.2284 16.3289 45.1898 16.1878 45.125 16.0582C45.0601 15.9286 44.9704 15.813 44.861 15.7181C44.7515 15.6231 44.6244 15.5507 44.4869 15.5048C44.3494 15.459 44.2043 15.4407 44.0597 15.451C43.9152 15.4612 43.774 15.4999 43.6444 15.5647C43.5148 15.6295 43.3992 15.7192 43.3043 15.8287C43.2093 15.9382 43.1369 16.0653 43.091 16.2028C42.7429 17.3026 42.1508 18.3096 41.3589 19.1486C41.1073 19.4114 40.8297 19.6481 40.5303 19.8549C37.5558 19.779 34.7124 18.6144 32.5392 16.582C30.366 14.5495 29.0139 11.7904 28.7393 8.82759H51.8621C53.362 8.8262 54.849 9.10423 56.247 9.64745C55.8581 15.3646 51.5069 19.0207 50.4 19.8621ZM53.4363 20.149C55.2846 18.3337 57.7829 15.1339 58.3604 10.7178C60.0157 11.7676 61.3923 13.2025 62.3725 14.9C63.3527 16.5974 63.9074 18.5069 63.9892 20.4654C63.0237 21.4999 60.4465 23.6843 56.2112 23.297C56.0401 22.5859 55.6979 21.9273 55.2143 21.3787C54.7307 20.83 54.1203 20.4079 53.4363 20.149ZM45.1374 29.2L51.9953 28.8039C52.2644 30.1159 52.9807 31.7383 54.4691 32.9069C53.6066 33.0407 52.7349 33.1064 51.8621 33.1034H46.7135C46.1036 32.6043 44.5982 31.1375 45.1374 29.2ZM39.2331 29.5407L42.8607 29.3312C42.6637 30.7903 43.12 32.0834 43.7793 33.1034H39.1975C38.7398 33.0773 38.3098 32.8759 37.9966 32.541C37.6835 32.2061 37.5114 31.7635 37.516 31.3051C37.5205 30.8467 37.7015 30.4076 38.0212 30.0791C38.341 29.7505 38.775 29.5577 39.2331 29.5407ZM31.0069 26.4828H32C32.8417 26.4845 33.672 26.6781 34.4277 27.0488C35.1835 27.4194 35.8448 27.9574 36.3615 28.6219C35.808 29.2235 35.4535 29.9812 35.3462 30.7916C34.2795 30.5794 33.299 30.0575 32.5272 29.2911C31.7554 28.5248 31.2266 27.548 31.0069 26.4828ZM35.7477 33.1448C36.0251 33.6854 36.4221 34.1556 36.9087 34.5194C36.4443 35.4214 35.7406 36.1781 34.8748 36.7069C34.0091 37.2356 33.0145 37.516 32 37.5172H31.0069C31.2405 36.384 31.8236 35.3526 32.6742 34.5683C33.5247 33.7839 34.5999 33.286 35.7483 33.1448H35.7477ZM3.31034 60.6897H2.26772C2.52072 58.4604 3.51976 56.3821 5.10265 54.7922C6.68554 53.2022 8.75936 52.194 10.9874 51.931C11.1482 53.1035 11.5532 54.2292 12.1761 55.2354C11.3473 56.8756 10.0799 58.2537 8.51471 59.2166C6.94954 60.1795 5.14798 60.6894 3.31034 60.6897ZM10.9874 49.5862C8.75936 49.3233 6.68554 48.315 5.10265 46.7251C3.51976 45.1351 2.52072 43.0568 2.26772 40.8276H3.31034C5.14798 40.8279 6.94954 41.3378 8.51471 42.3007C10.0799 43.2636 11.3473 44.6417 12.1761 46.2818C11.5532 47.288 11.1482 48.4137 10.9874 49.5862ZM49.6175 59.7553C48.5265 60.1025 47.361 60.4257 46.1141 60.7139C42.1839 61.4191 38.1998 61.7802 34.2069 61.7931C28.0952 61.7931 21.9836 59.872 16.0414 56.0828C15.1443 55.5138 14.4055 54.7273 13.8936 53.7965C13.3817 52.8656 13.1133 51.8205 13.1133 50.7582C13.1133 49.6959 13.3817 48.6508 13.8936 47.7199C14.4055 46.7891 15.1443 46.0026 16.0414 45.4337C21.9836 41.6452 28.0952 39.7241 34.2069 39.7241C38.1998 39.7379 42.1839 40.099 46.1142 40.8034C47.3611 41.0916 48.5266 41.4149 49.6177 41.7619C49.0959 42.8939 47.4483 46.7839 47.4483 50.7586C47.4483 54.7334 49.0959 58.6234 49.6175 59.7553ZM60.3019 54.263C58.5039 55.7023 55.7126 57.509 51.7132 59.0259C51.4512 58.4785 49.6552 54.5844 49.6552 50.7586C49.6552 46.9487 51.4505 43.0426 51.7134 42.4913C55.7127 44.0086 58.504 45.8154 60.3019 47.2542C62.1517 48.7352 63.2492 50.0517 63.7712 50.7586C63.2483 51.4668 62.1517 52.7828 60.3019 54.263Z" fill="black"/>
            <path d="M57.3793 50.7587C57.9887 50.7587 58.4828 50.2646 58.4828 49.6552C58.4828 49.0458 57.9887 48.5518 57.3793 48.5518C56.7699 48.5518 56.2759 49.0458 56.2759 49.6552C56.2759 50.2646 56.7699 50.7587 57.3793 50.7587Z" fill="black"/>
            <path d="M38.5895 45.8625C38.5464 45.6861 38.4603 45.5231 38.339 45.3879C38.2177 45.2527 38.065 45.1495 37.8942 45.0875L29.3821 41.9979C29.1217 41.9034 28.8354 41.9102 28.5798 42.0171C28.3243 42.1239 28.1183 42.323 28.0028 42.5747C27.9407 42.7096 26.4829 45.9388 26.4829 50.7591C26.4829 55.5794 27.9403 58.8086 28.0024 58.9437C28.1179 59.1954 28.3239 59.3944 28.5794 59.5013C28.835 59.6081 29.1213 59.615 29.3817 59.5205L37.8938 56.4308C38.0646 56.3689 38.2174 56.2657 38.3387 56.1305C38.46 55.9953 38.5461 55.8323 38.5893 55.6558C38.6324 55.4794 38.6314 55.295 38.5862 55.119C38.541 54.9431 38.4531 54.781 38.3302 54.6472C38.3188 54.635 37.2022 53.3465 37.2022 50.7591C37.2022 48.189 38.2919 46.9145 38.3302 46.871C38.4531 46.7372 38.5411 46.5752 38.5863 46.3993C38.6315 46.2234 38.6326 46.039 38.5895 45.8625ZM35.8057 54.6954C35.8251 54.7379 35.8447 54.7792 35.8643 54.8195L29.6574 57.0723C29.1205 55.3835 28.8052 53.6322 28.7195 51.8621H29.7933C30.0859 51.8621 30.3666 51.7459 30.5735 51.5389C30.7804 51.332 30.8967 51.0513 30.8967 50.7587C30.8967 50.466 30.7804 50.1854 30.5735 49.9784C30.3666 49.7715 30.0859 49.6552 29.7933 49.6552H28.7193C28.8051 47.8852 29.1204 46.1337 29.6573 44.4449L35.8642 46.6979C35.8446 46.7385 35.825 46.7799 35.8055 46.822C35.2712 48.0655 34.9956 49.4048 34.9956 50.7583C34.9956 52.1117 35.2712 53.451 35.8055 54.6946L35.8057 54.6954Z" fill="black"/>
            <path d="M1.62662 29.1206C1.64041 29.1297 1.65421 29.1387 1.668 29.1472L5.5171 31.5134V34.2069C5.51809 35.0846 5.86717 35.926 6.48777 36.5466C7.10837 37.1672 7.94979 37.5163 8.82745 37.5173C9.504 37.5173 10.0846 37.2767 10.6993 37.0221C11.4214 36.7231 12.168 36.4138 13.2412 36.4138C14.3145 36.4138 15.0611 36.7231 15.7832 37.0221C16.3979 37.2767 16.9792 37.5173 17.655 37.5173C18.5327 37.5163 19.3741 37.1672 19.9947 36.5466C20.6153 35.926 20.9644 35.0846 20.9654 34.2069V31.5134L24.8143 29.1472C24.8281 29.1387 24.8419 29.1297 24.8557 29.1206C26.5083 28 26.9821 25.5811 25.8902 23.8387C23.6185 20.2116 18.8259 16.5518 13.2412 16.5518C7.65655 16.5518 2.864 20.2116 0.591862 23.8387C-0.499724 25.5811 -0.0259309 28 1.62662 29.1206ZM18.7585 34.2069C18.7582 34.4995 18.6418 34.78 18.4349 34.9868C18.2281 35.1937 17.9476 35.31 17.655 35.3104C17.4174 35.3104 17.0514 35.1587 16.6277 34.9832C15.8367 34.6556 14.7535 34.2069 13.2412 34.2069C11.729 34.2069 10.6458 34.6556 9.85476 34.9832C9.43103 35.1587 9.0651 35.3104 8.82745 35.3104C8.5349 35.31 8.25442 35.1937 8.04756 34.9868C7.84069 34.78 7.72433 34.4995 7.724 34.2069V32H9.92772H9.93172H9.93641H16.5461H16.5508H16.5548H18.7585V34.2069ZM2.46207 25.0102C4.41131 21.8985 8.50041 18.7587 13.2412 18.7587C17.9821 18.7587 22.0712 21.8985 24.0204 25.0102C24.4792 25.7424 24.2941 26.8187 23.6342 27.2821L19.5499 29.7931H18.337L19.7454 26.9763C19.8736 26.7149 19.8932 26.4134 19.8001 26.1375C19.707 25.8617 19.5086 25.6338 19.2482 25.5036C18.9878 25.3733 18.6864 25.3513 18.4098 25.4423C18.1333 25.5333 17.9038 25.7299 17.7716 25.9893L15.8697 29.7931H14.3447V25.3793C14.3447 25.0867 14.2284 24.806 14.0215 24.5991C13.8146 24.3922 13.5339 24.2759 13.2412 24.2759C12.9486 24.2759 12.6679 24.3922 12.461 24.5991C12.254 24.806 12.1378 25.0867 12.1378 25.3793V29.7931H10.6128L8.7109 25.9893C8.64678 25.8585 8.55741 25.7417 8.44795 25.6457C8.33849 25.5496 8.21109 25.4762 8.07311 25.4296C7.93513 25.383 7.7893 25.3642 7.64401 25.3743C7.49873 25.3843 7.35687 25.423 7.22662 25.4882C7.09637 25.5533 6.9803 25.6436 6.8851 25.7538C6.7899 25.864 6.71746 25.992 6.67196 26.1303C6.62645 26.2686 6.60878 26.4146 6.61996 26.5598C6.63114 26.705 6.67095 26.8466 6.7371 26.9763L8.14552 29.7931H6.93255L2.848 27.2828C2.18841 26.8187 2.00331 25.7424 2.46207 25.0102Z" fill="black"/>
        </svg>
        </>
    )
}