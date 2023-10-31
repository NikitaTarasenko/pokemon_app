import React from 'react';
import styles from './NavBar.module.scss';
import { ReactNode } from 'react';
import { PokFilters } from 'entities/Pokemon';

interface NavbarrProps {
    children?: ReactNode;
}

const NavBar = ({ children }: NavbarrProps) => {
    return (
        <div className={styles.main}>
            <PokFilters />
            {children}
        </div>
    );
};

export default NavBar;
