"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const styles = (theme) => ({
    headline: {
        fontWeight: 'lighter',
        color: theme.colorText,
        marginTop: 0,
        marginBottom: 10,
        textAlign: 'left',
    },
    h1: {
        fontSize: 30,
        marginTop: 0,
    },
    h2: {
        fontSize: 20,
    },
    h3: {
        fontSize: 18,
    },
    h4: {
        fontSize: theme.uiFontSize,
    },
});
class HeadlineComponent extends react_1.Component {
    render() {
        const { classes, level, className, children, id } = this.props;
        return react_1.createElement(`h${level}`, {
            id,
            className: classnames_1.default({
                [classes.headline]: true,
                [classes[level ? `h${level}` : 'h1']]: true,
                [`${className}`]: className,
            }),
            'data-type': 'franz-headline',
        }, children);
    }
}
const Headline = react_jss_1.default(styles)(HeadlineComponent);
const createH = (level) => (props) => (jsx_runtime_1.jsx(Headline, Object.assign({ level: level }, props, { children: props.children }), void 0));
exports.H1 = createH(1);
exports.H2 = createH(2);
exports.H3 = createH(3);
exports.H4 = createH(4);
//# sourceMappingURL=index.js.map