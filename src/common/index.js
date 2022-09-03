function concatStyles(...styleClasses) {
    const animationClass = '';
    return [...styleClasses, animationClass].join(' ');
}

export const concatCss = (...cssClasses) => ({
    className: concatStyles(...cssClasses),
  });

export const getImageUrlFromResources = (imageName, extension='jpg') => `assets/images/${imageName}.${extension}`;
export const getIconFromResources = (iconName, extension='svg') => `assets/icons/${iconName}.${extension}`;

export const getCurrency = (amount, currencySymbol='€') => `${currencySymbol}${amount.toFixed(2)}`;