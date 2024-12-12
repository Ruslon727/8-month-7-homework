import { fchown } from "fs"

function LocationIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.66406C9.10457 8.66406 10 7.76863 10 6.66406C10 5.55949 9.10457 4.66406 8 4.66406C6.89543 4.66406 6 5.55949 6 6.66406C6 7.76863 6.89543 8.66406 8 8.66406Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99739 1.33203C6.58291 1.33203 5.22635 1.89393 4.22616 2.89413C3.22597 3.89432 2.66406 5.25088 2.66406 6.66536C2.66406 7.9267 2.93206 8.75203 3.66406 9.66536L7.99739 14.6654L12.3307 9.66536C13.0627 8.75203 13.3307 7.9267 13.3307 6.66536C13.3307 5.25088 12.7688 3.89432 11.7686 2.89413C10.7684 1.89393 9.41188 1.33203 7.99739 1.33203V1.33203Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function ArrowIcon() {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.96484 1.26147L5.00112 4.71674L1.00004 1.30481" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function Logo() {
    return (
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.0652 38.4764C49.9944 38.7556 50.9833 38.2294 51.1683 37.2769C51.7595 34.2335 51.5366 31.0764 50.5067 28.1301C49.2829 24.6289 46.9824 21.6049 43.9348 19.4911C40.8872 17.3774 37.2488 16.2824 33.5408 16.3629C29.8328 16.4435 26.2454 17.6955 23.2925 19.9397C20.3396 22.1838 18.1727 25.3049 17.1021 28.8559C16.0315 32.407 16.1123 36.2057 17.3327 39.708C18.5532 43.2104 20.8508 46.2366 23.8964 48.3532C26.4594 50.1345 29.4414 51.1947 32.532 51.44C33.4992 51.5168 34.2711 50.7049 34.2509 49.7349C34.2308 48.7648 33.4252 48.0062 32.4602 47.9052C30.1129 47.6597 27.8551 46.8256 25.9016 45.468C23.4651 43.7746 21.6271 41.3537 20.6507 38.5518C19.6743 35.7499 19.6097 32.711 20.4662 29.8701C21.3226 27.0293 23.0562 24.5324 25.4185 22.7371C27.7808 20.9418 30.6507 19.9402 33.6171 19.8757C36.5835 19.8113 39.4943 20.6873 41.9323 22.3783C44.3704 24.0693 46.2108 26.4885 47.1898 29.2894C47.9748 31.5351 48.1738 33.9338 47.7818 36.2612C47.6207 37.218 48.1359 38.1972 49.0652 38.4764Z" fill="#E81504" />
            <path d="M23.8815 29.7982C23.2746 29.5625 22.5855 29.8625 22.4116 30.4898C21.8557 32.4955 21.839 34.6202 22.3737 36.6461C23.009 39.0534 24.3903 41.1976 26.3194 42.7714C28.2485 44.3453 30.6264 45.2679 33.1121 45.4069C35.5979 45.546 38.0639 44.8945 40.1565 43.5457C42.2491 42.1969 43.861 40.2201 44.7609 37.8988C45.6608 35.5775 45.8026 33.0308 45.166 30.6239C44.5293 28.2171 43.1469 26.0736 41.217 24.5008C39.5927 23.1771 37.6508 22.3149 35.5945 21.9928C34.9514 21.8921 34.3936 22.3959 34.3576 23.0459C34.3216 23.6959 34.8218 24.2445 35.4622 24.3613C37.0209 24.6455 38.4897 25.3193 39.7277 26.3283C41.2717 27.5865 42.3776 29.3013 42.8869 31.2268C43.3962 33.1523 43.2828 35.1896 42.5628 37.0467C41.8429 38.9037 40.5534 40.4851 38.8793 41.5642C37.2052 42.6432 35.2324 43.1644 33.2438 43.0532C31.2552 42.9419 29.3529 42.2038 27.8096 40.9448C26.2663 39.6857 25.1613 37.9703 24.6531 36.0445C24.2455 34.5003 24.2384 32.8844 24.6233 31.3474C24.7814 30.7159 24.4883 30.0338 23.8815 29.7982Z" fill="#E81504" />
            <path d="M39.1635 38.1198C39.5211 38.3616 40.0108 38.2692 40.2156 37.8893C40.8695 36.6764 41.1933 35.3077 41.1472 33.9213C41.0925 32.2737 40.5182 30.6856 39.5064 29.384C38.4946 28.0825 37.0971 27.1343 35.5138 26.675C33.9305 26.2157 32.2426 26.2688 30.6913 26.8267C29.14 27.3847 27.8049 28.4189 26.8769 29.7814C25.9489 31.144 25.4756 32.7651 25.5245 34.4129C25.5735 36.0607 26.1423 37.6509 27.1496 38.9559C27.9971 40.054 29.1185 40.9029 30.3951 41.4214C30.795 41.5838 31.2313 41.3431 31.353 40.929C31.4747 40.5149 31.235 40.085 30.8393 39.9126C29.8777 39.4937 29.0329 38.8378 28.3869 38.0009C27.5811 36.9568 27.1261 35.6847 27.0869 34.3665C27.0477 33.0482 27.4264 31.7513 28.1688 30.6613C28.9112 29.5712 29.9793 28.7439 31.2203 28.2975C32.4613 27.8512 33.8117 27.8087 35.0783 28.1761C36.3449 28.5436 37.4629 29.3022 38.2724 30.3434C39.0818 31.3846 39.5413 32.6551 39.5851 33.9732C39.6201 35.0298 39.3867 36.0737 38.9122 37.009C38.717 37.394 38.8059 37.8781 39.1635 38.1198Z" fill="#E81504" />
            <path d="M30.0934 32.1117C29.8868 31.9605 29.5945 32.0045 29.4647 32.2252C29.0499 32.9305 28.8278 33.7358 28.825 34.5595C28.8217 35.5384 29.1284 36.4932 29.701 37.2871C30.2736 38.081 31.0829 38.6732 32.0127 38.979C32.9426 39.2848 33.9454 39.2884 34.8775 38.9893C35.8095 38.6902 36.623 38.1038 37.2013 37.314C37.7796 36.5242 38.0931 35.5717 38.0968 34.5928C38.1006 33.614 37.7944 32.6591 37.2222 31.8649C36.7406 31.1965 36.0914 30.6709 35.3436 30.3386C35.1097 30.2346 34.8463 30.369 34.7662 30.6122C34.6861 30.8553 34.82 31.1148 35.0513 31.2246C35.6141 31.4917 36.1029 31.8975 36.4699 32.4069C36.9277 33.0423 37.1727 33.8062 37.1697 34.5893C37.1667 35.3724 36.9159 36.1344 36.4532 36.7662C35.9906 37.398 35.3398 37.8672 34.5942 38.1065C33.8485 38.3457 33.0463 38.3429 32.3024 38.0982C31.5585 37.8536 30.9111 37.3798 30.453 36.7447C29.9949 36.1096 29.7496 35.3457 29.7522 34.5627C29.7543 33.9348 29.9157 33.3203 30.2179 32.7757C30.3422 32.5518 30.3001 32.2628 30.0934 32.1117Z" fill="#E81504" />
            <path d="M35.5544 36.2905C35.684 36.3958 35.8758 36.3769 35.9676 36.2375C36.2613 35.7918 36.4327 35.2746 36.4618 34.7381C36.4964 34.1007 36.3282 33.4686 35.9814 32.9326C35.6347 32.3966 35.1271 31.9841 34.5315 31.7543C33.9358 31.5245 33.2827 31.4893 32.6658 31.6535C32.0489 31.8178 31.4998 32.1731 31.0973 32.6687C30.6948 33.1642 30.4595 33.7745 30.4252 34.412C30.3909 35.0495 30.5593 35.6814 30.9063 36.2173C31.1983 36.6683 31.6042 37.0318 32.0806 37.2724C32.2296 37.3477 32.4054 37.2687 32.4654 37.1129C32.5254 36.9572 32.4466 36.7839 32.2996 36.7049C31.9416 36.5127 31.6363 36.2325 31.4137 35.8887C31.1361 35.46 31.0014 34.9545 31.0289 34.4445C31.0563 33.9345 31.2445 33.4463 31.5666 33.0498C31.8886 32.6534 32.3278 32.3691 32.8214 32.2377C33.3149 32.1063 33.8374 32.1345 34.3139 32.3183C34.7904 32.5022 35.1964 32.8321 35.4739 33.261C35.7513 33.6898 35.8858 34.1954 35.8581 34.7054C35.836 35.1143 35.7104 35.5092 35.4954 35.854C35.4071 35.9956 35.4249 36.1852 35.5544 36.2905Z" fill="#E81504" />
        </svg>

    )
}

function SearchIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0918 16.9083L15.0002 13.8416C16.2002 12.3453 16.7814 10.446 16.6242 8.53434C16.4669 6.62267 15.5832 4.84391 14.1548 3.56379C12.7263 2.28368 10.8617 1.59951 8.94427 1.65198C7.02686 1.70445 5.20243 2.48956 3.84612 3.84587C2.4898 5.20219 1.70469 7.02662 1.65222 8.94402C1.59976 10.8614 2.28392 12.7261 3.56403 14.1545C4.84415 15.583 6.62292 16.4667 8.53458 16.6239C10.4462 16.7812 12.3455 16.2 13.8418 14.9999L16.9085 18.0666C16.986 18.1447 17.0781 18.2067 17.1797 18.249C17.2812 18.2913 17.3902 18.3131 17.5002 18.3131C17.6102 18.3131 17.7191 18.2913 17.8206 18.249C17.9222 18.2067 18.0144 18.1447 18.0918 18.0666C18.242 17.9112 18.326 17.7035 18.326 17.4874C18.326 17.2713 18.242 17.0636 18.0918 16.9083ZM9.16683 14.9999C8.01311 14.9999 6.88529 14.6578 5.926 14.0168C4.96672 13.3759 4.21904 12.4648 3.77753 11.3989C3.33602 10.333 3.2205 9.16012 3.44558 8.02856C3.67066 6.89701 4.22624 5.8576 5.04204 5.0418C5.85785 4.22599 6.89725 3.67042 8.0288 3.44534C9.16036 3.22026 10.3332 3.33578 11.3992 3.77729C12.4651 4.2188 13.3761 4.96647 14.0171 5.92576C14.658 6.88505 15.0002 8.01286 15.0002 9.16659C15.0002 10.7137 14.3856 12.1974 13.2916 13.2914C12.1977 14.3853 10.7139 14.9999 9.16683 14.9999Z" fill="currentColor" />
        </svg>

    )
}

function Image1() {
    return (
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00329 0.0578113C4.91185 0.0244069 4.80964 0.0616947 4.76119 0.146133L3.97192 1.52168L0.0274913 8.24572C0.00949 8.2764 0 8.31134 0 8.34691V8.52178C0 10.8974 1.98419 12.8301 4.42308 12.8301C6.86196 12.8301 8.84615 10.8974 8.84615 8.52178V8.3469C8.84615 8.31133 8.83667 8.27641 8.81867 8.24572L5.40338 2.4221C5.30852 2.26035 5.46839 2.06872 5.64452 2.13306L8.80661 3.28807C8.83354 3.29791 8.84615 3.32317 8.84615 3.35184C8.84615 4.42463 9.52481 5.33826 10.4822 5.72808C10.5611 5.76019 10.6154 5.83536 10.6154 5.92052V16.0767C10.6154 16.1871 10.5258 16.2767 10.4154 16.2767H7.27692C7.16647 16.2767 7.07692 16.3662 7.07692 16.4767V17.8C7.07692 17.9105 7.16647 18 7.27692 18H12.1846C12.2951 18 12.3846 17.9105 12.3846 17.8V5.92031C12.3846 5.83525 12.4387 5.76018 12.5174 5.72795C12.858 5.58855 13.1649 5.38121 13.4183 5.11933C13.4765 5.05911 13.5645 5.03628 13.6429 5.06597L17.462 6.51293C17.5778 6.5568 17.6263 6.69431 17.5636 6.80114L14.1813 12.5678C14.1633 12.5985 14.1538 12.6334 14.1538 12.669V12.8438C14.1538 15.2186 16.138 17.1383 18.5769 17.1383C21.0158 17.1383 23 15.2186 23 12.8438V12.669C23 12.6334 22.9905 12.5985 22.9725 12.5678L18.6127 5.13614C18.5896 5.09668 18.5536 5.06635 18.5108 5.05021L14.1988 3.42423C14.1686 3.41282 14.1538 3.38418 14.1538 3.35184C14.1538 1.92666 12.9632 0.766874 11.5 0.766874C11.1145 0.768315 10.7341 0.852082 10.3854 1.01227C10.0794 1.15289 9.80442 1.34939 9.5752 1.59069C9.51764 1.65129 9.4301 1.67499 9.35159 1.64631L5.00329 0.0578113ZM11.5 2.49019C11.7278 2.50011 11.9428 2.59523 12.1004 2.75573C12.258 2.91624 12.3459 3.12976 12.3459 3.35184C12.3459 3.57392 12.258 3.78745 12.1004 3.94795C11.9428 4.10846 11.7278 4.20357 11.5 4.2135C11.2722 4.20357 11.0572 4.10846 10.8996 3.94795C10.742 3.78745 10.6541 3.57392 10.6541 3.35184C10.6541 3.12976 10.742 2.91624 10.8996 2.75573C11.0572 2.59523 11.2722 2.50011 11.5 2.49019ZM4.25058 4.52127C4.32786 4.38955 4.51829 4.38955 4.59557 4.52127L6.2606 7.35891C6.33884 7.49224 6.24269 7.66012 6.08811 7.66012H2.75805C2.60346 7.66012 2.50732 7.49224 2.58555 7.35891L4.25058 4.52127ZM18.4044 8.84254C18.4817 8.71081 18.6721 8.71081 18.7494 8.84254L20.4065 11.6672C20.4847 11.8005 20.3886 11.9684 20.234 11.9684H16.9198C16.7652 11.9684 16.6691 11.8005 16.7473 11.6672L18.4044 8.84254ZM2.04679 9.64615C1.98489 9.52175 2.08093 9.38344 2.21988 9.38344H6.62754C6.76614 9.38344 6.86219 9.5211 6.80084 9.64538C6.60747 10.0371 6.31481 10.3763 5.94853 10.6299C5.5028 10.9385 4.96991 11.1051 4.42308 11.1067C3.37476 11.1067 2.47594 10.5086 2.04679 9.64615ZM16.1916 13.9527C16.1312 13.8285 16.2273 13.6917 16.3654 13.6917H20.7884C20.9265 13.6917 21.0226 13.8285 20.9623 13.9527C20.7701 14.3484 20.4769 14.6915 20.1087 14.9479C19.6617 15.2591 19.1264 15.4272 18.5769 15.4288C18.0275 15.4272 17.4921 15.2591 17.0451 14.9479C16.677 14.6915 16.3838 14.3484 16.1916 13.9527Z" fill="#545D6A" />
        </svg>

    )
}

function Image2() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z" fill="#545D6A" />
        </svg>

    )
}

function Image3() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="#545D6A" />
        </svg>

    )
}

function Image4() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function BasketIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="white" />
        </svg>

    )
}

export { LocationIcon, ArrowIcon, Logo, SearchIcon, Image1, Image2, Image3, Image4, BasketIcon }