"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProBadge = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const js_1 = require("@mdi/js");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const __1 = require("..");
const styles = (theme) => ({
    badge: {
        height: 'auto',
        padding: [4, 6, 2, 7],
        borderRadius: theme.borderRadiusSmall,
    },
    invertedBadge: {
        background: theme.styleTypes.primary.contrast,
        color: theme.styleTypes.primary.accent,
    },
    icon: {
        fill: theme.styleTypes.primary.contrast,
    },
    invertedIcon: {
        fill: theme.styleTypes.primary.accent,
    },
});
class ProBadgeComponent extends react_1.Component {
    render() {
        const { classes, badgeClasses, iconClasses, inverted, className } = this.props;
        return (jsx_runtime_1.jsx(__1.Badge, Object.assign({ type: "primary", className: classnames_1.default([
                classes.badge,
                inverted && classes.invertedBadge,
                badgeClasses,
                className,
            ]) }, { children: jsx_runtime_1.jsx(__1.Icon, { icon: js_1.mdiStar, className: classnames_1.default([
                    classes.icon,
                    inverted && classes.invertedIcon,
                    iconClasses,
                ]) }, void 0) }), void 0));
    }
}
exports.ProBadge = react_jss_1.default(styles)(ProBadgeComponent);
//# sourceMappingURL=ProBadge.js.map