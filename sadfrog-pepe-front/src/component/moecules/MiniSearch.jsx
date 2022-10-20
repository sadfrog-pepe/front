import React from 'react';
import Button from '../atoms/button/Button';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MiniSearch = () => {
    return (
        <div>
            <Button>장바구니</Button>
            <Button.icon icon={faMagnifyingGlass}></Button.icon>
        </div>
    );
};

export default MiniSearch;
