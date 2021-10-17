"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const js_1 = require("@mdi/js");
const react_1 = tslib_1.__importDefault(require("@mdi/react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_2 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const error_1 = require("../error");
const label_1 = require("../label");
const wrapper_1 = require("../wrapper");
const scorePassword_1 = require("./scorePassword");
const styles_1 = tslib_1.__importDefault(require("./styles"));
class InputComponent extends react_2.Component {
    constructor() {
        super(...arguments);
        this.state = {
            passwordScore: 0,
            showPassword: false,
        };
        this.inputRef = react_2.createRef();
    }
    componentDidMount() {
        const { focus, data } = this.props;
        if (this.inputRef && this.inputRef.current) {
            if (focus) {
                this.inputRef.current.focus();
            }
            if (data) {
                Object.keys(data).map(key => (this.inputRef.current.dataset[key] = data[key]));
            }
        }
    }
    onChange(e) {
        const { scorePassword, onChange } = this.props;
        if (onChange) {
            onChange(e);
        }
        if (this.inputRef && this.inputRef.current && scorePassword) {
            this.setState({
                passwordScore: scorePassword_1.scorePasswordFunc(this.inputRef.current.value),
            });
        }
    }
    onInputKeyPress(e) {
        if (e.key === 'Enter') {
            const { onEnterKey } = this.props;
            onEnterKey && onEnterKey();
        }
    }
    render() {
        const { classes, className, disabled, error, id, inputClassName, label, prefix, scorePassword, suffix, showLabel, showPasswordToggle, type, value, name, placeholder, spellCheck, onBlur, onFocus, min, max, step, required, noMargin, } = this.props;
        const { showPassword, passwordScore } = this.state;
        const inputType = type === 'password' && showPassword ? 'text' : type;
        return (jsx_runtime_1.jsxs(wrapper_1.Wrapper, Object.assign({ className: className, identifier: "franz-input", noMargin: noMargin }, { children: [jsx_runtime_1.jsxs(label_1.Label, Object.assign({ title: label, showLabel: showLabel, htmlFor: id, className: classes.label, isRequired: required }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: classnames_1.default({
                                [`${inputClassName}`]: inputClassName,
                                [`${classes.hasPasswordScore}`]: scorePassword,
                                [`${classes.wrapper}`]: true,
                                [`${classes.disabled}`]: disabled,
                                [`${classes.hasError}`]: error,
                            }) }, { children: [prefix && jsx_runtime_1.jsx("span", Object.assign({ className: classes.prefix }, { children: prefix }), void 0),
                                jsx_runtime_1.jsx("input", { id: id, type: inputType, name: name, value: value, placeholder: placeholder, spellCheck: spellCheck, className: classes.input, ref: this.inputRef, onChange: this.onChange.bind(this), onFocus: onFocus, onBlur: onBlur, disabled: disabled, onKeyPress: this.onInputKeyPress.bind(this), min: min, max: max, step: step }, void 0),
                                suffix && jsx_runtime_1.jsx("span", Object.assign({ className: classes.suffix }, { children: suffix }), void 0),
                                showPasswordToggle && (jsx_runtime_1.jsx("button", Object.assign({ type: "button", className: classes.formModifier, onClick: () => this.setState(prevState => ({
                                        showPassword: !prevState.showPassword,
                                    })), tabIndex: -1 }, { children: jsx_runtime_1.jsx(react_1.default, { path: !showPassword ? js_1.mdiEye : js_1.mdiEyeOff, size: 1 }, void 0) }), void 0))] }), void 0),
                        scorePassword && (jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                                [`${classes.passwordScore}`]: true,
                                [`${classes.hasError}`]: error,
                            }) }, { children: jsx_runtime_1.jsx("meter", { value: passwordScore < 5 ? 5 : passwordScore, low: 30, high: 75, optimum: 100, max: 100 }, void 0) }), void 0))] }), void 0),
                error && jsx_runtime_1.jsx(error_1.Error, { message: error }, void 0)] }), void 0));
    }
}
InputComponent.defaultProps = {
    focus: false,
    onChange: () => { },
    onBlur: () => { },
    onFocus: () => { },
    scorePassword: false,
    showLabel: true,
    showPasswordToggle: false,
    type: 'text',
    disabled: false,
};
exports.Input = react_jss_1.default(styles_1.default)(InputComponent);
//# sourceMappingURL=index.js.map