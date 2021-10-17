"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
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
let popupTransition = 'none';
let toggleTransition = 'none';
if (window && window.matchMedia('(prefers-reduced-motion: no-preference)')) {
    popupTransition = 'all 0.3s';
    toggleTransition = 'transform 0.3s';
}
const styles = (theme) => ({
    select: {
        background: theme.selectBackground,
        border: theme.selectBorder,
        borderRadius: theme.borderRadiusSmall,
        height: theme.selectHeight,
        fontSize: theme.uiFontSize,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        color: theme.selectColor,
    },
    label: {
        '& > div': {
            marginTop: 5,
        },
    },
    popup: {
        opacity: 0,
        height: 0,
        overflowX: 'scroll',
        border: theme.selectBorder,
        borderTop: 0,
        transition: popupTransition,
    },
    open: {
        opacity: 1,
        height: 350,
        background: theme.selectPopupBackground,
    },
    option: {
        padding: 10,
        borderBottom: theme.selectOptionBorder,
        color: theme.selectOptionColor,
        '&:hover': {
            background: theme.selectOptionItemHover,
            color: theme.selectOptionItemHoverColor,
        },
        '&:active': {
            background: theme.selectOptionItemActive,
            color: theme.selectOptionItemActiveColor,
        },
    },
    selected: {
        background: theme.selectOptionItemActive,
        color: theme.selectOptionItemActiveColor,
    },
    toggle: {
        marginLeft: 'auto',
        fill: theme.selectToggleColor,
        transition: toggleTransition,
    },
    toggleOpened: {
        transform: 'rotateZ(90deg)',
    },
    searchContainer: {
        display: 'flex',
        background: theme.selectSearchBackground,
        alignItems: 'center',
        paddingLeft: 10,
        color: theme.selectColor,
        '& svg': {
            fill: theme.selectSearchColor,
        },
    },
    search: {
        border: 0,
        width: '100%',
        fontSize: theme.uiFontSize,
        background: 'none',
        marginLeft: 10,
        padding: [10, 0],
        color: theme.selectSearchColor,
    },
    clearNeedle: {
        background: 'none',
        border: 0,
    },
    focused: {
        fontWeight: 'bold',
        background: theme.selectOptionItemHover,
        color: theme.selectOptionItemHoverColor,
    },
    hasError: {
        borderColor: theme.brandDanger,
    },
    disabled: {
        opacity: theme.selectDisabledOpacity,
    },
});
class SelectComponent extends react_2.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
            value: '',
            needle: '',
            selected: 0,
            options: null,
        };
        this.componentRef = react_2.createRef();
        this.inputRef = react_2.createRef();
        this.searchInputRef = react_2.createRef();
        this.scrollContainerRef = react_2.createRef();
        this.activeOptionRef = react_2.createRef();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value,
            });
        }
    }
    componentDidUpdate() {
        const { open } = this.state;
        if (this.searchInputRef && this.searchInputRef.current && open) {
            this.searchInputRef.current.focus();
        }
    }
    componentDidMount() {
        if (this.inputRef && this.inputRef.current) {
            const { data } = this.props;
            if (data) {
                Object.keys(data).map(key => (this.inputRef.current.dataset[key] = data[key]));
            }
        }
        window.addEventListener('keydown', this.arrowKeysHandler.bind(this), false);
    }
    componentWillMount() {
        const { value } = this.props;
        if (this.componentRef && this.componentRef.current) {
            this.componentRef.current.removeEventListener('keydown', this.keyListener);
        }
        if (value) {
            this.setState({
                value,
            });
        }
        this.setFilter();
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.arrowKeysHandler.bind(this));
    }
    setFilter(needle = '') {
        const { options } = this.props;
        let filteredOptions = {};
        if (needle) {
            Object.keys(options).map(key => {
                if (key.toLocaleLowerCase().startsWith(needle.toLocaleLowerCase()) ||
                    options[key]
                        .toLocaleLowerCase()
                        .startsWith(needle.toLocaleLowerCase())) {
                    Object.assign(filteredOptions, {
                        [`${key}`]: options[key],
                    });
                }
            });
        }
        else {
            filteredOptions = options;
        }
        this.setState({
            needle,
            options: filteredOptions,
            selected: 0,
        });
    }
    select(key) {
        this.setState(() => ({
            value: key,
            open: false,
        }));
        this.setFilter();
        if (this.props.onChange) {
            this.props.onChange(key);
        }
    }
    arrowKeysHandler(e) {
        const { selected, open, options } = this.state;
        if (!open)
            return;
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
        }
        if (this.componentRef && this.componentRef.current) {
            if (e.keyCode === 38 && selected > 0) {
                this.setState((state) => ({
                    selected: state.selected - 1,
                }));
            }
            else if (e.keyCode === 40 &&
                selected < Object.keys(options).length - 1) {
                this.setState((state) => ({
                    selected: state.selected + 1,
                }));
            }
            else if (e.keyCode === 13) {
                this.select(Object.keys(options)[selected]);
            }
            if (this.activeOptionRef &&
                this.activeOptionRef.current &&
                this.scrollContainerRef &&
                this.scrollContainerRef.current) {
                const containerTopOffset = this.scrollContainerRef.current.offsetTop;
                const optionTopOffset = this.activeOptionRef.current.offsetTop;
                const topOffset = optionTopOffset - containerTopOffset;
                this.scrollContainerRef.current.scrollTop = topOffset - 35;
            }
        }
        switch (e.keyCode) {
            case 37:
            case 39:
            case 38:
            case 40:
            case 32:
                break;
            default:
                break;
        }
    }
    render() {
        const { actionText, classes, className, defaultValue, disabled, error, id, inputClassName, name, label, showLabel, showSearch, onChange, required, } = this.props;
        const { open, needle, value, selected, options } = this.state;
        let selection = '';
        if (!value && defaultValue && options[defaultValue]) {
            selection = options[defaultValue];
        }
        else if (value && options[value]) {
            selection = options[value];
        }
        else {
            selection = actionText;
        }
        return (jsx_runtime_1.jsxs(wrapper_1.Wrapper, Object.assign({ className: className, identifier: "franz-select" }, { children: [jsx_runtime_1.jsxs(label_1.Label, Object.assign({ title: label, showLabel: showLabel, htmlFor: id, className: classes.label, isRequired: required }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: classnames_1.default({
                                [`${classes.hasError}`]: error,
                                [`${classes.disabled}`]: disabled,
                            }), ref: this.componentRef }, { children: [jsx_runtime_1.jsxs("button", Object.assign({ type: "button", className: classnames_1.default({
                                        [`${inputClassName}`]: inputClassName,
                                        [`${classes.select}`]: true,
                                        [`${classes.hasError}`]: error,
                                    }), onClick: !disabled
                                        ? () => this.setState((state) => ({
                                            open: !state.open,
                                        }))
                                        : () => { } }, { children: [selection, jsx_runtime_1.jsx(react_1.default, { path: js_1.mdiArrowRightDropCircleOutline, size: 0.8, className: classnames_1.default({
                                                [`${classes.toggle}`]: true,
                                                [`${classes.toggleOpened}`]: open,
                                            }) }, void 0)] }), void 0),
                                showSearch && open && (jsx_runtime_1.jsxs("div", Object.assign({ className: classes.searchContainer }, { children: [jsx_runtime_1.jsx(react_1.default, { path: js_1.mdiMagnify, size: 0.8 }, void 0),
                                        jsx_runtime_1.jsx("input", { type: "text", value: needle, onChange: e => this.setFilter(e.currentTarget.value), placeholder: "Search", className: classes.search, ref: this.searchInputRef }, void 0),
                                        needle && (jsx_runtime_1.jsx("button", Object.assign({ type: "button", className: classes.clearNeedle, onClick: () => this.setFilter() }, { children: jsx_runtime_1.jsx(react_1.default, { path: js_1.mdiCloseCircle, size: 0.7 }, void 0) }), void 0))] }), void 0)),
                                jsx_runtime_1.jsx("div", Object.assign({ className: classnames_1.default({
                                        [`${classes.popup}`]: true,
                                        [`${classes.open}`]: open,
                                    }), ref: this.scrollContainerRef }, { children: Object.keys(options).map((key, i) => (jsx_runtime_1.jsx("div", Object.assign({ onClick: () => this.select(key), className: classnames_1.default({
                                            [`${classes.option}`]: true,
                                            [`${classes.selected}`]: options[key] === selection,
                                            [`${classes.focused}`]: selected === i,
                                        }), onMouseOver: () => this.setState({ selected: i }), ref: selected === i ? this.activeOptionRef : null }, { children: options[key] }), key))) }), void 0)] }), void 0),
                        jsx_runtime_1.jsx("input", { className: classes.input, id: id, name: name, type: "hidden", defaultValue: value, onChange: onChange, disabled: disabled, ref: this.inputRef }, void 0)] }), void 0),
                error && jsx_runtime_1.jsx(error_1.Error, { message: error }, void 0)] }), void 0));
    }
}
SelectComponent.defaultProps = {
    onChange: () => { },
    showLabel: true,
    disabled: false,
    error: '',
};
exports.Select = react_jss_1.default(styles)(SelectComponent);
//# sourceMappingURL=index.js.map