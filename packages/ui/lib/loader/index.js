"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importStar(require("react-jss"));
const react_loader_1 = tslib_1.__importDefault(require("react-loader"));
const styles = () => ({
    container: {
        position: 'relative',
        height: 60,
    },
});
class LoaderComponent extends react_1.Component {
    render() {
        const { classes, className, color, theme } = this.props;
        return (jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                [classes.container]: true,
                [`${className}`]: className,
            }), "data-type": "franz-loader" }, { children: jsx_runtime_1.jsx(react_loader_1.default, { loaded: false, width: 4, scale: 0.75, color: color || theme.colorText, parentClassName: classes.loader }, void 0) }), void 0));
    }
}
exports.Loader = react_jss_1.default(styles)(react_jss_1.withTheme(LoaderComponent));
//# sourceMappingURL=index.js.map