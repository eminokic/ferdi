"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("@mdi/react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_2 = require("react");
const react_jss_1 = tslib_1.__importStar(require("react-jss"));
const react_loader_1 = tslib_1.__importDefault(require("react-loader"));
let buttonTransition = 'none';
let loaderContainerTransition = 'none';
if (window && window.matchMedia('(prefers-reduced-motion: no-preference)')) {
    buttonTransition = 'background .5s, opacity 0.3s';
    loaderContainerTransition = 'all 0.3s';
}
const styles = (theme) => ({
    button: {
        borderRadius: theme.borderRadiusSmall,
        border: 'none',
        display: 'inline-flex',
        position: 'relative',
        transition: buttonTransition,
        textAlign: 'center',
        outline: 'none',
        alignItems: 'center',
        padding: 0,
        width: (props) => (props.stretch ? '100%' : 'auto'),
        fontSize: theme.uiFontSize,
        textDecoration: 'none',
        '&:hover': {
            opacity: 0.8,
        },
        '&:active': {
            opacity: 0.5,
            transition: 'none',
        },
    },
    label: {
        margin: '10px 20px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        background: theme.buttonPrimaryBackground,
        color: theme.buttonPrimaryTextColor,
        '& svg': {
            fill: theme.buttonPrimaryTextColor,
        },
    },
    secondary: {
        background: theme.buttonSecondaryBackground,
        color: theme.buttonSecondaryTextColor,
        '& svg': {
            fill: theme.buttonSecondaryTextColor,
        },
    },
    success: {
        background: theme.buttonSuccessBackground,
        color: theme.buttonSuccessTextColor,
        '& svg': {
            fill: theme.buttonSuccessTextColor,
        },
    },
    danger: {
        background: theme.buttonDangerBackground,
        color: theme.buttonDangerTextColor,
        '& svg': {
            fill: theme.buttonDangerTextColor,
        },
    },
    warning: {
        background: theme.buttonWarningBackground,
        color: theme.buttonWarningTextColor,
        '& svg': {
            fill: theme.buttonWarningTextColor,
        },
    },
    inverted: {
        background: theme.buttonInvertedBackground,
        color: theme.buttonInvertedTextColor,
        border: theme.buttonInvertedBorder,
        '& svg': {
            fill: theme.buttonInvertedTextColor,
        },
    },
    disabled: {
        opacity: theme.inputDisabledOpacity,
    },
    loader: {
        position: 'relative',
        width: 20,
        height: 18,
        zIndex: 9999,
    },
    loaderContainer: {
        width: (props) => (!props.busy ? '0' : '40px'),
        height: 20,
        overflow: 'hidden',
        transition: loaderContainerTransition,
        marginLeft: (props) => (!props.busy ? 10 : 20),
        marginRight: (props) => (!props.busy ? -10 : -20),
        position: (props) => props.stretch ? 'absolute' : 'inherit',
    },
    icon: {
        margin: [1, 10, 0, -5],
    },
});
class ButtonComponent extends react_2.Component {
    constructor() {
        super(...arguments);
        this.state = {
            busy: false,
        };
    }
    componentWillMount() {
        this.setState({ busy: this.props.busy });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.busy !== this.props.busy) {
            if (this.props.busy) {
                setTimeout(() => {
                    this.setState({ busy: nextProps.busy });
                }, 300);
            }
            else {
                this.setState({ busy: nextProps.busy });
            }
        }
    }
    render() {
        const { classes, className, theme, disabled, id, label, type, onClick, buttonType, loaded, icon, href, target, } = this.props;
        const { busy } = this.state;
        let showLoader = false;
        if (loaded) {
            showLoader = !loaded;
            console.warn('Ferdi Button prop `loaded` will be deprecated in the future. Please use `busy` instead');
        }
        if (busy) {
            showLoader = busy;
        }
        const content = (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: classes.loaderContainer }, { children: showLoader && (jsx_runtime_1.jsx(react_loader_1.default, { loaded: false, width: 4, scale: 0.45, color: theme.buttonLoaderColor[buttonType], parentClassName: classes.loader }, void 0)) }), void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: classes.label }, { children: [icon && jsx_runtime_1.jsx(react_1.default, { path: icon, size: 0.8, className: classes.icon }, void 0), label] }), void 0)] }, void 0));
        const wrapperComponent = !href ? (jsx_runtime_1.jsx("button", Object.assign({ id: id, type: type, onClick: onClick, className: classnames_1.default({
                [`${classes.button}`]: true,
                [`${classes[buttonType]}`]: true,
                [`${classes.disabled}`]: disabled,
                [`${className}`]: className,
            }), disabled: disabled, "data-type": "franz-button" }, { children: content }), void 0)) : (jsx_runtime_1.jsx("a", Object.assign({ href: href, target: target, onClick: onClick, className: classnames_1.default({
                [`${classes.button}`]: true,
                [`${classes[buttonType]}`]: true,
                [`${className}`]: className,
            }), rel: target === '_blank' ? 'noopener' : '', "data-type": "franz-button" }, { children: content }), void 0));
        return wrapperComponent;
    }
}
ButtonComponent.defaultProps = {
    type: 'button',
    disabled: false,
    onClick: () => null,
    buttonType: 'primary',
    stretch: false,
    busy: false,
};
exports.Button = react_jss_1.default(styles)(react_jss_1.withTheme(ButtonComponent));
//# sourceMappingURL=index.js.map