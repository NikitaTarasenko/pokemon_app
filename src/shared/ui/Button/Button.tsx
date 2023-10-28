import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import { Modes, classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
    BACKGROUND_INVERTED_OUTL = 'background_inverted_outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    theme?: ThemeButton;
    children?: ReactNode;
}

const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        disabled,
        ...otherProps
    } = props;

    const mods: Modes = {
        [styles[theme]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
