"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const styles = {
    container: {
        marginBottom: (props) => (props.noMargin ? 0 : 20),
    },
};
class WrapperComponent extends react_1.Component {
    render() {
        const { children, classes, className, identifier } = this.props;
        return (jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                [`${classes.container}`]: true,
                [`${className}`]: className,
            }), "data-type": identifier }, { children: children }), void 0));
    }
}
exports.Wrapper = react_jss_1.default(styles)(WrapperComponent);
//# sourceMappingURL=index.js.map