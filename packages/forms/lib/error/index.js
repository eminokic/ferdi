"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const styles_1 = tslib_1.__importDefault(require("./styles"));
class ErrorComponent extends react_1.Component {
    render() {
        const { classes, message } = this.props;
        return jsx_runtime_1.jsx("p", Object.assign({ className: classes.message }, { children: message }), void 0);
    }
}
exports.Error = react_jss_1.default(styles_1.default)(ErrorComponent);
//# sourceMappingURL=index.js.map