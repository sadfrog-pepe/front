import React from 'react';
import styles from './Arrow.module.css';
import classnames from 'classnames';

export const ArrowType = {
    RIGTH: 'right',
    LEFT: 'left',
};

const Arrow = (props) => {
    const { onClick, type, className } = props;
    const classProp = classnames(styles.arrow, styles[type], className);

    let arrowType = type === 'right' ? '>' : '<';
    return (
        <button onClick={onClick} className={classProp}>
            {arrowType}
        </button>
    );
};

export default Arrow;
