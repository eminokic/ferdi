import * as legacyStyles from '../legacy';
import type { IStyleTypes } from '../IStyleTypes';
declare const _default: (brandPrimary: string) => {
    brandPrimary: string;
    brandSuccess: string;
    brandInfo: string;
    brandWarning: string;
    brandDanger: string;
    uiFontSize: number;
    borderRadius: string;
    borderRadiusSmall: string;
    colorBackground: string;
    colorContentBackground: string;
    colorHeadline: string;
    colorText: string;
    defaultContentBorder: string;
    colorSubscriptionContainerBackground: string;
    colorSubscriptionContainerBorder: string;
    colorSubscriptionContainerTitle: string;
    colorSubscriptionContainerActionButtonBackground: string;
    colorSubscriptionContainerActionButtonColor: string;
    colorAppLoaderSpinner: string;
    colorFullscreenLoaderSpinner: string;
    colorWebviewLoaderBackground: string;
    labelColor: string;
    inputColor: string;
    inputHeight: number;
    inputBackground: string;
    inputBorder: string;
    inputModifierColor: string;
    inputPlaceholderColor: string;
    inputPrefixColor: string;
    inputPrefixBackground: string;
    inputDisabledOpacity: number;
    inputScorePasswordBackground: string;
    toggleBackground: string;
    toggleButton: string;
    toggleButtonActive: string;
    toggleWidth: number;
    toggleHeight: number;
    styleTypes: IStyleTypes;
    buttonPrimaryBackground: string;
    buttonPrimaryTextColor: string;
    buttonSecondaryBackground: string;
    buttonSecondaryTextColor: string;
    buttonSuccessBackground: string;
    buttonSuccessTextColor: string;
    buttonDangerBackground: string;
    buttonDangerTextColor: string;
    buttonWarningBackground: string;
    buttonWarningTextColor: string;
    buttonInvertedBackground: string;
    buttonInvertedTextColor: string;
    buttonInvertedBorder: string;
    buttonHeight: number;
    buttonLoaderColor: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        inverted: string;
    };
    selectBackground: string;
    selectBorder: string;
    selectHeight: number;
    selectColor: string;
    selectToggleColor: string;
    selectPopupBackground: string;
    selectOptionColor: string;
    selectOptionBorder: string;
    selectOptionItemHover: string;
    selectOptionItemHoverColor: string;
    selectOptionItemActive: string;
    selectOptionItemActiveColor: string;
    selectSearchBackground: string;
    selectSearchColor: string;
    selectDisabledOpacity: number;
    badgeFontSize: number;
    badgeBorderRadius: number;
    colorModalOverlayBackground: string;
    colorModalBackground: string;
    services: {
        listItems: {
            padding: number;
            height: number;
            borderColor: string;
            hoverBgColor: string;
            disabled: {
                color: string;
            };
        };
    };
    serviceIcon: {
        width: number;
        isCustom: {
            border: string;
            borderRadius: string;
            width: number;
        };
    };
    workspaces: {
        settings: {
            listItems: {
                padding: number;
                height: number;
                borderColor: string;
                hoverBgColor: string;
                disabled: {
                    color: string;
                };
            };
        };
        drawer: {
            width: number;
            padding: number;
            background: string;
            buttons: {
                color: string;
                hoverColor: string;
            };
            listItem: {
                hoverBackground: string;
                activeBackground: string;
                border: string;
                name: {
                    color: string;
                    activeColor: string;
                };
                services: {
                    color: string;
                    active: string;
                };
            };
        };
        switchingIndicator: {
            spinnerColor: string;
        };
    };
    todos: {
        todosLayer: {
            borderLeftColor: string;
        };
        toggleButton: {
            background: string;
            textColor: string;
            shadowColor: string;
        };
        dragIndicator: {
            background: string;
        };
        resizeHandler: {
            backgroundHover: string;
        };
    };
    legacyStyles: typeof legacyStyles;
};
export default _default;
