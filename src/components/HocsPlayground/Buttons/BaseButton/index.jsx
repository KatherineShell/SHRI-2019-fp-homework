import React from 'react';

import cn from 'classnames';
import styles from './styles.module.css';


const getButtonClassName = (size, color, position) => cn(
    styles.button,
    {
        [styles.buttonSizeSmall]: size === 'small',
        [styles.buttonSizeMedium]: size === 'medium',
        [styles.buttonSizeLarge]: size === 'large',
        [styles.buttonThemePrimary]: color === 'primary',
        [styles.buttonThemeDefault]: color === 'default',
        [styles.buttonPositionRelative]: position === 'relative'
    }
);

const BaseButton = ({
    size = "small",
    color = "default",
    onClick,
    onMouseOn,
    children,
    style,
    position
}) => {
    return (
        <button style={style} onMouseUp={onMouseOn}
            onClick={onClick} className={getButtonClassName(size, color, position)}>
            {children}
        </button>
    );
};


export default BaseButton;
