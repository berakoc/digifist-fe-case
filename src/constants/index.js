import { getImageUrlFromResources } from "../common";

export const products = [
    {
        imageUrl: getImageUrlFromResources('365-signature-hoodie'),
        name: 'Organic Skinny High Waist Raw Hem Jeans',
        price: 33.95,
    },
    {
        imageUrl: getImageUrlFromResources('organic-skinny-high-waist-jeans'),
        name: 'Organic Skinny High Waist Raw Hem Jeans',
        price: 33.95,
    },
    {
        imageUrl: getImageUrlFromResources('blue-hoodie'),
        name: 'Organic Skinny High Waist Raw Hem Jeans',
        price: 33.95,
    },
]

export const colorSelectorOptions = ['#99C3CC', '#CC9999', '#CB99CC', '#BCD9B2'];

export const mobileScreenMaxWidth = 450;

export const ScreenType = {
    MOBILE: 'MOBILE',
    DESKTOP: 'DESKTOP',
    TABLET: 'TABLET',
}

export const screenTypeSizeBoundries = {
    [ScreenType.MOBILE]: 450,
    [ScreenType.TABLET]: 992,
}

export const HorizontalLayoutPadding = {
    [ScreenType.MOBILE]: 24,
    [ScreenType.TABLET]: 64,
    [ScreenType.DESKTOP]: 120,
}

export const ProductListSpacing = {
    [ScreenType.MOBILE]: 12,
    [ScreenType.TABLET]: 24,
    [ScreenType.DESKTOP]: 32,
}

export const SwiperButtonDirection = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
}