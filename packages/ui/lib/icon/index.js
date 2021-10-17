"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("@mdi/react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_2 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const styles = (theme) => ({
    icon: {
        fill: theme.colorText,
    },
});
class IconComponent extends react_2.Component {
    render() {
        const { classes, icon, size, className } = this.props;
        if (!icon) {
            console.warn('No Icon specified');
        }
        return (jsx_runtime_1.jsx(react_1.default, { path: icon, size: size, className: classnames_1.default({
                [classes.icon]: true,
                [`${className}`]: className,
            }) }, void 0));
    }
}
IconComponent.defaultProps = {
    size: 1,
};
exports.Icon = react_jss_1.default(styles)(IconComponent);
//# sourceMappingURL=index.js.map