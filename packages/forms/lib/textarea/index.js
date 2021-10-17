"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const react_jss_1 = tslib_1.__importDefault(require("react-jss"));
const error_1 = require("../error");
const label_1 = require("../label");
const wrapper_1 = require("../wrapper");
const styles_1 = tslib_1.__importDefault(require("./styles"));
class TextareaComponent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.textareaRef = react_1.createRef();
    }
    componentDidMount() {
        const { data } = this.props;
        if (this.textareaRef && this.textareaRef.current && data) {
            Object.keys(data).map(key => (this.textareaRef.current.dataset[key] = data[key]));
        }
    }
    onChange(e) {
        const { onChange } = this.props;
        if (onChange) {
            onChange(e);
        }
    }
    render() {
        const { classes, className, disabled, error, id, textareaClassName, label, showLabel, value, name, placeholder, spellCheck, onBlur, onFocus, minLength, maxLength, required, rows, noMargin, } = this.props;
        return (jsx_runtime_1.jsxs(wrapper_1.Wrapper, Object.assign({ className: className, identifier: "franz-textarea", noMargin: noMargin }, { children: [jsx_runtime_1.jsx(label_1.Label, Object.assign({ title: label, showLabel: showLabel, htmlFor: id, className: classes.label, isRequired: required }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                            [`${textareaClassName}`]: textareaClassName,
                            [`${classes.wrapper}`]: true,
                            [`${classes.disabled}`]: disabled,
                            [`${classes.hasError}`]: error,
                        }) }, { children: jsx_runtime_1.jsx("textarea", Object.assign({ id: id, name: name, placeholder: placeholder, spellCheck: spellCheck, className: classes.textarea, ref: this.textareaRef, onChange: this.onChange.bind(this), onFocus: onFocus, onBlur: onBlur, disabled: disabled, minLength: minLength, maxLength: maxLength, rows: rows }, { children: value }), void 0) }), void 0) }), void 0),
                error && jsx_runtime_1.jsx(error_1.Error, { message: error }, void 0)] }), void 0));
    }
}
TextareaComponent.defaultProps = {
    focus: false,
    onChange: () => { },
    onBlur: () => { },
    onFocus: () => { },
    showLabel: true,
    disabled: false,
    rows: 5,
};
exports.Textarea = react_jss_1.default(styles_1.default)(TextareaComponent);
//# sourceMappingURL=index.js.map