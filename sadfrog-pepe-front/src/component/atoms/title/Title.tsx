import React from 'react';
import classNames from 'classnames';
import styles from './Title.module.css';

export interface TitleProps {
    children: string;
    className?: string;
}
const Title = <T extends TitleProps>(props: T) => {
    const { children, className } = props;

    const classProps = classNames(className, styles.title);
    return <div className={classProps}>{children}</div>;
};

export default Title;
