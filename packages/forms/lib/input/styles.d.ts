import { Property } from 'csstype';
import { Theme } from '../../../theme';
declare const _default: (theme: Theme) => {
    label: {
        '& > div': {
            marginTop: number;
        };
    };
    disabled: {
        opacity: number;
    };
    formModifier: {
        background: string;
        border: number;
        borderLeft: string;
        padding: string;
        outline: string;
        '&:active': {
            opacity: number;
        };
        '& svg': {
            fill: string;
        };
    };
    input: {
        background: string;
        border: number;
        fontSize: number;
        outline: string;
        padding: number;
        width: string;
        color: string;
        '&::placeholder': {
            color: string;
        };
    };
    passwordScore: {
        background: string;
        border: string;
        borderTopWidth: number;
        borderBottomLeftRadius: string;
        borderBottomRightRadius: string;
        display: string;
        flexBasis: string;
        height: number;
        overflow: string;
        '& meter': {
            display: string;
            height: string;
            width: string;
            '&::-webkit-meter-bar': {
                background: string;
            };
            '&::-webkit-meter-even-less-good-value': {
                background: string;
            };
            '&::-webkit-meter-suboptimum-value': {
                background: string;
            };
            '&::-webkit-meter-optimum-value': {
                background: string;
            };
        };
    };
    prefix: {
        background: string;
        color: string;
        lineHeight: string;
        padding: string;
        fontSize: number;
    };
    suffix: {
        background: string;
        color: string;
        lineHeight: string;
        padding: string;
        fontSize: number;
    };
    wrapper: {
        background: string;
        border: string;
        borderRadius: string;
        boxSizing: Property.BoxSizing;
        display: string;
        height: number;
        order: number;
        width: string;
    };
    hasPasswordScore: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    hasError: {
        borderColor: string;
    };
};
export default _default;
