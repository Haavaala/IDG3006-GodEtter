import React from 'react';
import './icons.css';

export default function Fruit({size}) {

    const svgSizeStyle = size === 'big' ? 'svg-big' : 'svg-small'

    const width = size !== 'big' ? '71.11' : '100'

    const height = size !== 'big' ? '64' : '90'
    
    const viewBox = size !== 'big' ? '0 0 71.11 64' : '0 0 100 90'

    return (
        <>
        <svg className={svgSizeStyle} width='71.11' height='64' viewBox='0 0 71.11 64' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.2988 28.9283C66.1329 26.7137 64.9272 24.4238 63.9519 21.0099C62.6092 16.3102 59.818 14.069 57.7131 13.0164C56.7049 12.5129 55.6276 12.1616 54.5164 11.9739V1.18812C54.5164 0.923706 54.4279 0.666904 54.2651 0.458574C54.1022 0.250244 53.8744 0.102354 53.6178 0.0384314C53.3612 -0.0254912 53.0907 -0.00177405 52.8491 0.10581C52.6076 0.213394 52.4089 0.398665 52.2848 0.632146C49.2393 -0.340409 39.9019 -1.96983 33.3078 11.3271C33.2245 11.4951 33.1822 11.6804 33.1844 11.8679C33.1866 12.0554 33.2333 12.2396 33.3206 12.4056C33.4078 12.5715 33.5332 12.7143 33.6865 12.8224C33.8397 12.9304 34.0164 13.0006 34.202 13.0271C35.3654 13.1723 36.5371 13.2416 37.7095 13.2345C39.5501 13.2417 41.387 13.0694 43.1942 12.7201C47.1671 11.9255 50.1856 10.2482 52.1466 7.78358V11.9744C51.0354 12.162 49.9582 12.5133 48.95 13.0169C46.845 14.0694 44.0539 16.3107 42.7111 21.0103C41.7357 24.4226 40.5306 26.7122 39.3653 28.9263C39.0136 29.5943 38.6766 30.2362 38.3514 30.895C37.8209 30.8436 37.2835 30.8165 36.7398 30.8165C36.2465 30.8165 35.7585 30.8394 35.2761 30.8818C34.6916 27.4535 33.1752 24.994 30.7523 23.5676C26.8108 21.2469 21.5907 22.3836 18.9627 23.208V17.7801H18.9611C18.9617 17.718 18.9574 17.656 18.9482 17.5946C18.9344 17.5071 18.5907 15.4223 16.9718 13.102C15.4972 10.9886 12.6312 8.23867 7.3532 7.13812C7.08802 7.08296 6.81194 7.12024 6.57089 7.24376C6.32983 7.36727 6.13833 7.56959 6.02822 7.81706C5.94703 7.99972 4.06562 12.332 6.4159 15.6616C8.00858 17.9177 11.0686 19.0554 15.5287 19.0554C15.8744 19.0554 16.229 19.0484 16.5924 19.0343V23.2074C13.8814 22.3564 8.41168 21.1733 4.43213 23.7978C1.49105 25.7368 0 29.2945 0 34.372C0 43.8289 4.21021 52.6645 10.0109 55.3815C11.0907 55.9029 12.2725 56.1789 13.4716 56.1899C15.0128 56.1788 16.5142 55.6999 17.7771 54.8166C19.2882 55.8398 20.9481 56.298 22.6534 56.166C23.9947 58.3274 25.8156 60.1509 27.9749 61.4955C30.1343 62.8401 32.5741 63.6695 35.1056 63.9197C37.637 64.1698 40.192 63.8339 42.5727 62.9379C44.9535 62.042 47.096 60.6101 48.8344 58.7531C50.312 59.076 51.8189 59.2459 53.3313 59.26C56.146 59.26 60.4273 58.5171 64.0022 56.432C68.651 53.7201 71.1084 49.3704 71.1084 43.8532C71.1084 36.1631 69.258 32.649 67.2988 28.9283ZM42.7836 10.3845C40.6336 10.7943 38.4419 10.942 36.2564 10.8244C38.7145 6.4937 41.7129 3.79632 45.1863 2.79592C47.4105 2.15953 49.7789 2.24212 51.9534 3.03191C50.8425 6.90317 47.7611 9.37492 42.7836 10.3845ZM8.3585 14.3039C7.29691 12.8098 7.58268 10.8408 7.8877 9.70188C13.4035 11.1953 15.4839 14.7454 16.2262 16.6755C12.2514 16.7847 9.54541 15.9747 8.3585 14.3039ZM18.5359 52.4235C18.3229 52.2461 18.0545 52.1489 17.7773 52.1489C17.5 52.1489 17.2316 52.2461 17.0186 52.4235C15.1722 53.9623 13.1521 54.2354 11.0166 53.2347C8.75374 52.1749 6.6316 49.7987 5.03907 46.544C3.29306 42.975 2.37028 38.7658 2.37028 34.372C2.37028 30.1447 3.50105 27.2538 5.73134 25.7798C10.0372 22.9344 17.239 25.9497 17.3103 25.9801C17.4578 26.0431 17.6165 26.0756 17.777 26.0756C17.9374 26.0756 18.0961 26.0431 18.2436 25.9801C18.3129 25.9504 25.2236 23.0562 29.5555 25.6124C31.3372 26.6642 32.4709 28.5604 32.9373 31.2566C30.5953 31.808 28.4012 32.8621 26.5072 34.3459C24.6133 35.8297 23.0647 37.7077 21.9688 39.8497C20.873 41.9917 20.2562 44.3464 20.1611 46.7505C20.066 49.1546 20.4949 51.5507 21.4181 53.7725C20.4148 53.6347 19.4502 53.1854 18.5356 52.4235H18.5359ZM36.7393 61.6297C33.9266 61.6297 31.1769 60.7956 28.8382 59.2329C26.4995 57.6702 24.6766 55.4491 23.6002 52.8504C22.5238 50.2517 22.2422 47.3922 22.7909 44.6335C23.3397 41.8748 24.6942 39.3407 26.6831 37.3517C28.672 35.3628 31.2061 34.0083 33.9648 33.4596C36.7236 32.9108 39.5831 33.1925 42.1817 34.2689C44.7804 35.3453 47.0015 37.1681 48.5642 39.5069C50.1269 41.8456 50.961 44.5952 50.961 47.408C50.9568 51.1785 49.457 54.7934 46.7909 57.4595C44.1247 60.1257 40.5099 61.6254 36.7393 61.6297ZM62.8078 54.3846C59.6422 56.2315 55.8364 56.8897 53.3313 56.8897C52.3866 56.882 51.4438 56.8027 50.511 56.6527C51.9955 54.4442 52.9269 51.9109 53.2263 49.2667C53.5257 46.6225 53.1844 43.9451 52.2312 41.4606C51.278 38.9761 49.741 36.7574 47.7498 34.992C45.7587 33.2265 43.372 31.9662 40.7912 31.3173C41.0082 30.8931 41.2319 30.4675 41.4623 30.0298C42.6268 27.8173 43.9468 25.3093 44.9897 21.6611C47.0726 14.3709 53.0823 14.227 53.3255 14.2244C53.5803 14.2267 59.59 14.3706 61.6729 21.6611C62.7157 25.3112 64.0364 27.8196 65.2015 30.0327C67.0992 33.6367 68.7381 36.7494 68.7381 43.8532C68.7381 48.5459 66.7428 52.0884 62.8078 54.3846Z" fill="black"/>
            <path d="M45.0352 54.5187C45.6898 54.5187 46.2204 53.9881 46.2204 53.3336C46.2204 52.679 45.6898 52.1484 45.0352 52.1484C44.3807 52.1484 43.8501 52.679 43.8501 53.3336C43.8501 53.9881 44.3807 54.5187 45.0352 54.5187Z" fill="black"/>
            <path d="M41.4801 58.0744C42.1346 58.0744 42.6652 57.5438 42.6652 56.8892C42.6652 56.2347 42.1346 55.7041 41.4801 55.7041C40.8255 55.7041 40.2949 56.2347 40.2949 56.8892C40.2949 57.5438 40.8255 58.0744 41.4801 58.0744Z" fill="black"/>
            <path d="M41.4801 50.9631C42.1346 50.9631 42.6652 50.4324 42.6652 49.7779C42.6652 49.1234 42.1346 48.5928 41.4801 48.5928C40.8255 48.5928 40.2949 49.1234 40.2949 49.7779C40.2949 50.4324 40.8255 50.9631 41.4801 50.9631Z" fill="black"/>
            <path d="M45.0352 47.4084C45.6898 47.4084 46.2204 46.8778 46.2204 46.2232C46.2204 45.5687 45.6898 45.0381 45.0352 45.0381C44.3807 45.0381 43.8501 45.5687 43.8501 46.2232C43.8501 46.8778 44.3807 47.4084 45.0352 47.4084Z" fill="black"/>
            <path d="M40.8249 43.7268C41.1061 43.5863 41.3198 43.3398 41.4192 43.0416C41.5186 42.7434 41.4954 42.418 41.3548 42.1368C41.3033 42.0331 40.2567 39.9926 38.1253 39.3232C38.1671 39.2101 38.2163 39.1 38.2726 38.9935C38.6592 38.2662 39.3022 37.9269 40.2947 37.9269C40.6091 37.9269 40.9105 37.8021 41.1328 37.5798C41.355 37.3575 41.4799 37.0561 41.4799 36.7418C41.4799 36.4275 41.355 36.126 41.1328 35.9038C40.9105 35.6815 40.6091 35.5566 40.2947 35.5566C38.6444 35.5566 37.4934 36.1937 36.7393 37.0677C35.9853 36.1937 34.8342 35.5566 33.1839 35.5566C32.8696 35.5566 32.5681 35.6815 32.3459 35.9038C32.1236 36.126 31.9988 36.4275 31.9988 36.7418C31.9988 37.0561 32.1236 37.3575 32.3459 37.5798C32.5681 37.8021 32.8696 37.9269 33.1839 37.9269C34.1765 37.9269 34.8194 38.2662 35.206 38.9935C35.262 39.1001 35.3106 39.2105 35.3514 39.3238C33.2215 39.994 32.1755 42.0337 32.1239 42.1368C32.0529 42.2762 32.0101 42.4282 31.9981 42.5842C31.9861 42.7401 32.0051 42.8969 32.054 43.0455C32.1028 43.1941 32.1807 43.3315 32.2829 43.4499C32.3851 43.5682 32.5098 43.6652 32.6497 43.7351C32.7896 43.8051 32.942 43.8467 33.098 43.8575C33.254 43.8683 33.4107 43.8481 33.5589 43.798C33.7071 43.748 33.8439 43.6691 33.9614 43.566C34.079 43.4628 34.175 43.3374 34.2439 43.1969C34.2525 43.1798 35.146 41.4817 36.7393 41.4817C38.3301 41.4817 39.2293 43.1864 39.2348 43.1969C39.3043 43.3362 39.4006 43.4604 39.5181 43.5625C39.6357 43.6645 39.7722 43.7424 39.9199 43.7916C40.0676 43.8408 40.2235 43.8604 40.3788 43.8493C40.5341 43.8382 40.6856 43.7966 40.8248 43.7268H40.8249Z" fill="black"/>
        </svg>
        </>
    )
}