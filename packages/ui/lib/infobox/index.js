"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infobox = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const js_1 = require("@mdi/js");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const __1 = require("..");
const buttonStyles = (theme) => {
    const styles = {};
    Object.keys(theme.styleTypes).map(style => {
        Object.assign(styles, {
            [style]: {
                background: theme.styleTypes[style].accent,
                color: theme.styleTypes[style].contrast,
                border: theme.styleTypes[style].border,
                '& svg': {
                    fill: theme.styleTypes[style].contrast,
                },
            },
        });
    });
    return styles;
};
const infoBoxTransition = 'none';
const ctaTransition = 'none';
const styles = (theme) => ({
    wrapper: {
        position: 'relative',
        overflow: 'hidden',
        height: 'auto',
        marginBottom: 30,
    },
    infobox: {
        alignItems: 'center',
        borderRadius: theme.borderRadiusSmall,
        display: 'flex',
        height: 'auto',
        padding: '15px 20px',
        top: 0,
        transition: infoBoxTransition,
        opacity: 1,
    },
    dismissing: {
        marginTop: -100,
        opacity: 0,
    },
    content: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    },
    close: {
        color: (props) => theme.styleTypes[props.type ? props.type : 'primary'].contrast,
        marginRight: -5,
        border: 0,
        background: 'none',
    },
    cta: {
        borderColor: (props) => theme.styleTypes[props.type ? props.type : 'primary'].contrast,
        borderRadius: theme.borderRadiusSmall,
        borderStyle: 'solid',
        borderWidth: 1,
        background: 'none',
        color: (props) => theme.styleTypes[props.type ? props.type : 'primary'].contrast,
        marginLeft: 15,
        padding: [4, 10],
        fontSize: theme.uiFontSize,
        transition: ctaTransition,
        '&:hover': {
            opacity: 0.6,
        },
    },
    ...buttonStyles(theme),
});
class InfoboxComponent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isDismissing: false,
            dismissed: false,
        };
    }
    dismiss() {
        const { onDismiss } = this.props;
        this.setState({
            isDismissing: true,
        });
        if (onDismiss) {
            onDismiss();
        }
        setTimeout(() => {
            this.setState({
                dismissed: true,
            });
        }, 3000);
    }
    componentWillUnmount() {
        const { onUnmount } = this.props;
        if (onUnmount)
            onUnmount();
    }
    render() {
        const { classes, children, icon, type, ctaLabel, ctaOnClick, dismissable, className, } = this.props;
        const { isDismissing, dismissed } = this.state;
        if (dismissed) {
            return null;
        }
        return (jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                [classes.wrapper]: true,
                [`${className}`]: className,
            }) }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: classnames_1.default({
                    [classes.infobox]: true,
                    [classes[`${type}`]]: type,
                    [classes.dismissing]: isDismissing,
                }), "data-type": "franz-infobox" }, { children: [icon && jsx_runtime_1.jsx(__1.Icon, { icon: icon, className: classes.icon }, void 0),
                    jsx_runtime_1.jsx("div", Object.assign({ className: classes.content }, { children: children }), void 0),
                    ctaLabel && (jsx_runtime_1.jsx("button", Object.assign({ className: classes.cta, onClick: ctaOnClick, type: "button" }, { children: ctaLabel }), void 0)),
                    dismissable && (jsx_runtime_1.jsx("button", Object.assign({ type: "button", onClick: this.dismiss.bind(this), className: classes.close }, { children: jsx_runtime_1.jsx(__1.Icon, { icon: js_1.mdiClose }, void 0) }), void 0))] }), void 0) }), void 0));
    }
}
InfoboxComponent.defaultProps = {
    type: 'primary',
    dismissable: false,
    ctaOnClick: () => { },
    onDismiss: () => { },
    ctaLabel: '',
    ctaLoading: false,
};
exports.Infobox = react_jss_1.default(styles)(InfoboxComponent);
//# sourceMappingURL=index.js.map