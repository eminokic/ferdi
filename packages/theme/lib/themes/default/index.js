"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const color_1 = tslib_1.__importDefault(require("color"));
const lodash_1 = require("lodash");
const legacyStyles = tslib_1.__importStar(require("../legacy"));
exports.default = (brandPrimary) => {
    const brandSuccess = '#5cb85c';
    const brandInfo = '#5bc0de';
    const brandWarning = '#FF9F00';
    const brandDanger = '#d9534f';
    const uiFontSize = 14;
    const colorBackground = legacyStyles.themeGrayLighter;
    const colorContentBackground = '#FFFFFF';
    const colorText = legacyStyles.themeTextColor;
    const inputColor = legacyStyles.themeGray;
    const inputBackground = legacyStyles.themeGrayLightest;
    const inputHeight = 40;
    const inputBorder = `1px solid ${legacyStyles.themeGrayLighter}`;
    const inputPrefixColor = legacyStyles.themeGrayLight;
    const inputDisabledOpacity = 0.5;
    const buttonSecondaryTextColor = legacyStyles.themeGray;
    const selectColor = inputColor;
    const drawerBg = color_1.default(colorBackground).lighten(0.1).hex();
    const styleTypes = {
        primary: {
            accent: brandPrimary,
            contrast: '#FFF',
        },
        secondary: {
            accent: legacyStyles.themeGrayLighter,
            contrast: legacyStyles.themeGray,
        },
        success: {
            accent: brandSuccess,
            contrast: '#FFF',
        },
        warning: {
            accent: brandWarning,
            contrast: '#FFF',
        },
        danger: {
            accent: brandDanger,
            contrast: '#FFF',
        },
        inverted: {
            accent: 'none',
            contrast: brandPrimary,
            border: `1px solid ${brandPrimary}`,
        },
    };
    const services = {
        listItems: {
            padding: 10,
            height: 57,
            borderColor: legacyStyles.themeGrayLightest,
            hoverBgColor: legacyStyles.themeGrayLightest,
            disabled: {
                color: legacyStyles.themeGrayLight,
            },
        },
    };
    return {
        brandPrimary,
        brandSuccess,
        brandInfo,
        brandWarning,
        brandDanger,
        uiFontSize,
        borderRadius: legacyStyles.themeBorderRadius,
        borderRadiusSmall: legacyStyles.themeBorderRadiusSmall,
        colorBackground,
        colorContentBackground,
        colorHeadline: legacyStyles.themeGrayDark,
        colorText,
        defaultContentBorder: color_1.default(legacyStyles.themeGrayLighter)
            .darken(0.1)
            .rgb()
            .string(),
        colorSubscriptionContainerBackground: 'none',
        colorSubscriptionContainerBorder: `1px solid ${brandPrimary}`,
        colorSubscriptionContainerTitle: brandPrimary,
        colorSubscriptionContainerActionButtonBackground: brandPrimary,
        colorSubscriptionContainerActionButtonColor: '#FFF',
        colorAppLoaderSpinner: '#FFF',
        colorFullscreenLoaderSpinner: legacyStyles.themeGrayDark,
        colorWebviewLoaderBackground: color_1.default(legacyStyles.themeGrayLighter)
            .alpha(0.8)
            .rgb()
            .string(),
        labelColor: legacyStyles.themeGrayLight,
        inputColor,
        inputHeight,
        inputBackground,
        inputBorder,
        inputModifierColor: legacyStyles.themeGrayLight,
        inputPlaceholderColor: color_1.default(legacyStyles.themeGrayLight)
            .lighten(0.3)
            .hex(),
        inputPrefixColor,
        inputPrefixBackground: legacyStyles.themeGrayLighter,
        inputDisabledOpacity,
        inputScorePasswordBackground: legacyStyles.themeGrayLighter,
        toggleBackground: legacyStyles.themeGrayLighter,
        toggleButton: legacyStyles.themeGrayLight,
        toggleButtonActive: brandPrimary,
        toggleWidth: 40,
        toggleHeight: 14,
        styleTypes,
        buttonPrimaryBackground: brandPrimary,
        buttonPrimaryTextColor: '#FFF',
        buttonSecondaryBackground: legacyStyles.themeGrayLighter,
        buttonSecondaryTextColor,
        buttonSuccessBackground: brandSuccess,
        buttonSuccessTextColor: '#FFF',
        buttonDangerBackground: brandDanger,
        buttonDangerTextColor: '#FFF',
        buttonWarningBackground: brandWarning,
        buttonWarningTextColor: '#FFF',
        buttonInvertedBackground: 'none',
        buttonInvertedTextColor: brandPrimary,
        buttonInvertedBorder: `1px solid ${brandPrimary}`,
        buttonHeight: inputHeight,
        buttonLoaderColor: {
            primary: '#FFF',
            secondary: buttonSecondaryTextColor,
            success: '#FFF',
            warning: '#FFF',
            danger: '#FFF',
            inverted: brandPrimary,
        },
        selectBackground: inputBackground,
        selectBorder: inputBorder,
        selectHeight: inputHeight,
        selectColor,
        selectToggleColor: inputPrefixColor,
        selectPopupBackground: '#FFF',
        selectOptionColor: inputColor,
        selectOptionBorder: `1px solid ${legacyStyles.themeGrayLightest}`,
        selectOptionItemHover: legacyStyles.themeGrayLighter,
        selectOptionItemHoverColor: selectColor,
        selectOptionItemActive: brandPrimary,
        selectOptionItemActiveColor: '#FFF',
        selectSearchBackground: legacyStyles.themeGrayLighter,
        selectSearchColor: inputColor,
        selectDisabledOpacity: inputDisabledOpacity,
        badgeFontSize: uiFontSize - 2,
        badgeBorderRadius: 50,
        colorModalOverlayBackground: color_1.default('#000').alpha(0.8).rgb().string(),
        colorModalBackground: colorContentBackground,
        services,
        serviceIcon: {
            width: 35,
            isCustom: {
                border: `1px solid ${legacyStyles.themeGrayLighter}`,
                borderRadius: legacyStyles.themeBorderRadius,
                width: 37,
            },
        },
        workspaces: {
            settings: {
                listItems: lodash_1.cloneDeep(services.listItems),
            },
            drawer: {
                width: 300,
                padding: 20,
                background: drawerBg,
                buttons: {
                    color: color_1.default(legacyStyles.themeGrayLight).lighten(0.1).hex(),
                    hoverColor: legacyStyles.themeGrayLight,
                },
                listItem: {
                    hoverBackground: color_1.default(drawerBg).darken(0.01).hex(),
                    activeBackground: legacyStyles.themeGrayLightest,
                    border: color_1.default(drawerBg).darken(0.05).hex(),
                    name: {
                        color: colorText,
                        activeColor: colorText,
                    },
                    services: {
                        color: color_1.default(colorText).lighten(1.5).hex(),
                        active: color_1.default(colorText).lighten(1.5).hex(),
                    },
                },
            },
            switchingIndicator: {
                spinnerColor: 'white',
            },
        },
        todos: {
            todosLayer: {
                borderLeftColor: color_1.default(legacyStyles.themeGrayLighter).darken(0.1).hex(),
            },
            toggleButton: {
                background: styleTypes.primary.accent,
                textColor: styleTypes.primary.contrast,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
            },
            dragIndicator: {
                background: legacyStyles.themeGrayLight,
            },
            resizeHandler: {
                backgroundHover: styleTypes.primary.accent,
            },
        },
        legacyStyles,
    };
};
//# sourceMappingURL=index.js.map