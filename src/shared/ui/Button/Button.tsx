import React, { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './Button.module.scss';
import { Modes, classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    theme?: ThemeButton;
    children?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
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
            type="button"
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
});

export default Button;
