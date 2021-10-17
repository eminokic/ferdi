"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const styles_1 = tslib_1.__importDefault(require("./styles"));
class LabelComponent extends react_1.Component {
    render() {
        const { title, showLabel, classes, className, children, htmlFor, isRequired, } = this.props;
        if (!showLabel)
            return children;
        return (jsx_runtime_1.jsxs("label", Object.assign({ className: classnames_1.default({
                [`${className}`]: className,
            }), htmlFor: htmlFor }, { children: [showLabel && (jsx_runtime_1.jsxs("span", Object.assign({ className: classes.label }, { children: [title, isRequired && ' *'] }), void 0)),
                jsx_runtime_1.jsx("div", Object.assign({ className: classes.content }, { children: children }), void 0)] }), void 0));
    }
}
LabelComponent.defaultProps = {
    showLabel: true,
};
exports.Label = react_jss_1.default(styles_1.default)(LabelComponent);
//# sourceMappingURL=index.js.map