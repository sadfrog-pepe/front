import React from 'react';
import styles from './Arrow.module.css';
import classnames from 'classnames';

export enum ArrowType {
    RIGHT = 'right',
    LEFT = 'left',
}

export type ArrowProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: ArrowType;
    className?: string;
};

const Arrow = (props: ArrowProps) => {
    const { onClick, type, className } = props;
    const classProp = classnames(
        styles.arrow,
        styles[type ? type : ''],
        className
    );

    let arrowType = type === 'right' ? '>' : '<';
    return (
        <button onClick={onClick} className={classProp}>
            {arrowType}
        </button>
    );
};

export default Arrow;
