import { Classes } from 'jss';
import { Theme } from '../../../theme';
export interface IFormField {
    showLabel?: boolean;
    label?: string;
    error?: string;
    required?: boolean;
    noMargin?: boolean;
}
export interface IWithStyle {
    classes: Classes;
    theme: Theme;
}
export declare type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
