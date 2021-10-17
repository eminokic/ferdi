"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const badgeStyles = (theme) => {
    const styles = {};
    Object.keys(theme.styleTypes).map(style => {
        Object.assign(styles, {
            [style]: {
                background: theme.styleTypes[style].accent,
                color: theme.styleTypes[style].contrast,
                border: theme.styleTypes[style].border,
            },
        });
    });
    return styles;
};
const styles = (theme) => ({
    badge: {
        display: 'inline-block',
        padding: [3, 8, 4],
        fontSize: theme.badgeFontSize,
        borderRadius: theme.badgeBorderRadius,
        margin: [0, 4],
        '&:first-child': {
            marginLeft: 0,
        },
        '&:last-child': {
            marginRight: 0,
        },
    },
    ...badgeStyles(theme),
});
class BadgeComponent extends react_1.Component {
    render() {
        const { classes, children, type, className } = this.props;
        return (jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                [classes.badge]: true,
                [classes[type]]: true,
                [`${className}`]: className,
            }), "data-type": "franz-badge" }, { children: children }), void 0));
    }
}
BadgeComponent.defaultProps = {
    type: 'primary',
};
exports.Badge = react_jss_1.default(styles)(BadgeComponent);
//# sourceMappingURL=index.js.map