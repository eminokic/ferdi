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
    textarea: {
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
    wrapper: {
        background: string;
        border: string;
        borderRadius: string;
        boxSizing: Property.BoxSizing;
        display: string;
        order: number;
        width: string;
    };
    hasError: {
        borderColor: string;
    };
};
export default _default;
