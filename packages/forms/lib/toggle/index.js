"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const error_1 = require("../error");
const label_1 = require("../label");
const wrapper_1 = require("../wrapper");
let buttonTransition = 'none';
if (window && window.matchMedia('(prefers-reduced-motion: no-preference)')) {
    buttonTransition = 'all .5s';
}
const styles = (theme) => ({
    toggle: {
        background: theme.toggleBackground,
        borderRadius: theme.borderRadius,
        height: theme.toggleHeight,
        position: 'relative',
        width: theme.toggleWidth,
    },
    button: {
        background: theme.toggleButton,
        borderRadius: '100%',
        boxShadow: '0 1px 4px rgba(0, 0, 0, .3)',
        width: theme.toggleHeight - 2,
        height: theme.toggleHeight - 2,
        left: 1,
        top: 1,
        position: 'absolute',
        transition: buttonTransition,
    },
    buttonActive: {
        background: theme.toggleButtonActive,
        left: theme.toggleWidth - theme.toggleHeight + 1,
    },
    input: {
        visibility: 'hidden',
    },
    disabled: {
        opacity: theme.inputDisabledOpacity,
    },
    toggleLabel: {
        display: 'flex',
        alignItems: 'center',
        '& > span': {
            order: 1,
            marginLeft: 15,
        },
    },
});
class ToggleComponent extends react_1.Component {
    render() {
        const { classes, className, disabled, error, id, label, showLabel, checked, value, onChange, } = this.props;
        return (jsx_runtime_1.jsxs(wrapper_1.Wrapper, Object.assign({ className: className, identifier: "franz-toggle" }, { children: [jsx_runtime_1.jsx(label_1.Label, Object.assign({ title: label, showLabel: showLabel, htmlFor: id, className: classes.toggleLabel }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: classnames_1.default({
                            [`${classes.toggle}`]: true,
                            [`${classes.disabled}`]: disabled,
                        }) }, { children: [jsx_runtime_1.jsx("div", { className: classnames_1.default({
                                    [`${classes.button}`]: true,
                                    [`${classes.buttonActive}`]: checked,
                                }) }, void 0),
                            jsx_runtime_1.jsx("input", { className: classes.input, id: id, type: "checkbox", checked: checked, value: value, onChange: onChange, disabled: disabled }, void 0)] }), void 0) }), void 0),
                error && jsx_runtime_1.jsx(error_1.Error, { message: error }, void 0)] }), void 0));
    }
}
ToggleComponent.defaultProps = {
    onChange: () => { },
    showLabel: true,
    disabled: false,
    error: '',
};
exports.Toggle = react_jss_1.default(styles)(ToggleComponent);
//# sourceMappingURL=index.js.map