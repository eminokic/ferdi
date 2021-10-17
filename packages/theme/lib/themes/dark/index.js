"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const color_1 = tslib_1.__importDefault(require("color"));
const lodash_1 = require("lodash");
const default_1 = tslib_1.__importDefault(require("../default"));
const legacyStyles = tslib_1.__importStar(require("../legacy"));
exports.default = (brandPrimary) => {
    const defaultStyles = default_1.default(brandPrimary);
    let brandPrimaryColor = color_1.default(legacyStyles.themeBrandPrimary);
    try {
        brandPrimaryColor = color_1.default(defaultStyles.brandPrimary);
    }
    catch {
    }
    const colorBackground = legacyStyles.darkThemeGrayDarkest;
    const colorText = legacyStyles.darkThemeTextColor;
    const inputColor = legacyStyles.darkThemeGrayLightest;
    const inputBackground = legacyStyles.themeGrayDark;
    const inputBorder = `1px solid ${legacyStyles.darkThemeGrayLight}`;
    const inputPrefixColor = color_1.default(legacyStyles.darkThemeGrayLighter)
        .lighten(0.3)
        .hex();
    const buttonSecondaryTextColor = legacyStyles.darkThemeTextColor;
    const selectColor = inputColor;
    const drawerBg = color_1.default(colorBackground).lighten(0.3).hex();
    const services = lodash_1.merge({}, defaultStyles.services, {
        listItems: {
            borderColor: legacyStyles.darkThemeGrayDarker,
            hoverBgColor: legacyStyles.darkThemeGrayDarker,
            disabled: {
                color: legacyStyles.darkThemeGray,
            },
        },
    });
    return {
        ...defaultStyles,
        colorBackground,
        colorContentBackground: legacyStyles.darkThemeGrayDarkest,
        colorBackgroundSubscriptionContainer: legacyStyles.themeBrandInfo,
        colorHeadline: legacyStyles.darkThemeTextColor,
        colorText: legacyStyles.darkThemeTextColor,
        defaultContentBorder: legacyStyles.themeGrayDark,
        colorFullscreenLoaderSpinner: '#FFF',
        colorWebviewLoaderBackground: color_1.default(legacyStyles.darkThemeGrayDarkest)
            .alpha(0.5)
            .rgb()
            .string(),
        labelColor: legacyStyles.darkThemeTextColor,
        inputColor,
        inputBackground,
        inputBorder,
        inputPrefixColor,
        inputPrefixBackground: legacyStyles.darkThemeGray,
        inputDisabledOpacity: 0.5,
        inputScorePasswordBackground: legacyStyles.darkThemeGrayDark,
        inputModifierColor: color_1.default(legacyStyles.darkThemeGrayLighter)
            .lighten(0.3)
            .hex(),
        inputPlaceholderColor: color_1.default(legacyStyles.darkThemeGrayLighter)
            .darken(0.1)
            .hex(),
        toggleBackground: legacyStyles.darkThemeGray,
        toggleButton: legacyStyles.darkThemeGrayLighter,
        buttonPrimaryTextColor: legacyStyles.darkThemeTextColor,
        buttonSecondaryBackground: legacyStyles.darkThemeGrayLighter,
        buttonSecondaryTextColor,
        buttonDangerTextColor: legacyStyles.darkThemeTextColor,
        buttonWarningTextColor: legacyStyles.darkThemeTextColor,
        buttonLoaderColor: {
            primary: '#FFF',
            secondary: buttonSecondaryTextColor,
            success: '#FFF',
            warning: '#FFF',
            danger: '#FFF',
            inverted: defaultStyles.brandPrimary,
        },
        selectBackground: inputBackground,
        selectBorder: inputBorder,
        selectColor,
        selectToggleColor: inputPrefixColor,
        selectPopupBackground: legacyStyles.darkThemeGrayLight,
        selectOptionColor: '#FFF',
        selectOptionBorder: `1px solid ${color_1.default(legacyStyles.darkThemeGrayLight)
            .darken(0.2)
            .hex()}`,
        selectOptionItemHover: color_1.default(legacyStyles.darkThemeGrayLight)
            .darken(0.2)
            .hex(),
        selectOptionItemHoverColor: selectColor,
        selectSearchColor: inputBackground,
        colorModalOverlayBackground: color_1.default(legacyStyles.darkThemeBlack)
            .alpha(0.9)
            .rgb()
            .string(),
        colorModalBackground: legacyStyles.darkThemeGrayDark,
        services,
        serviceIcon: lodash_1.merge({}, defaultStyles.serviceIcon, {
            isCustom: {
                border: `1px solid ${legacyStyles.darkThemeGrayDark}`,
            },
        }),
        workspaces: lodash_1.merge({}, defaultStyles.workspaces, {
            settings: {
                listItems: lodash_1.cloneDeep(services.listItems),
            },
            drawer: {
                background: drawerBg,
                addButton: {
                    color: legacyStyles.darkThemeGrayLighter,
                    hoverColor: legacyStyles.darkThemeGraySmoke,
                },
                listItem: {
                    border: color_1.default(drawerBg).lighten(0.2).hex(),
                    hoverBackground: color_1.default(drawerBg).lighten(0.2).hex(),
                    activeBackground: defaultStyles.brandPrimary,
                    name: {
                        color: colorText,
                        activeColor: 'white',
                    },
                    services: {
                        color: color_1.default(colorText).darken(0.5).hex(),
                        active: brandPrimaryColor.lighten(0.5).hex(),
                    },
                },
            },
        }),
        todos: lodash_1.merge({}, defaultStyles.todos, {
            todosLayer: {
                borderLeftColor: legacyStyles.darkThemeGrayDarker,
            },
            toggleButton: {
                background: defaultStyles.styleTypes.primary.accent,
                textColor: defaultStyles.styleTypes.primary.contrast,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
            },
            dragIndicator: {
                background: legacyStyles.themeGrayLight,
            },
        }),
    };
};
//# sourceMappingURL=index.js.map