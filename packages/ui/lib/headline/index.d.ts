import { ReactNode } from 'react';
import { IWithStyle, Omit } from '../typings/generic';
interface IProps extends IWithStyle {
    level?: number;
    className?: string;
    children: string | ReactNode;
    id?: string;
}
export declare const H1: (props: Omit<IProps, 'classes' | 'theme'>) => JSX.Element;
export declare const H2: (props: Omit<IProps, 'classes' | 'theme'>) => JSX.Element;
export declare const H3: (props: Omit<IProps, 'classes' | 'theme'>) => JSX.Element;
export declare const H4: (props: Omit<IProps, 'classes' | 'theme'>) => JSX.Element;
export {};
