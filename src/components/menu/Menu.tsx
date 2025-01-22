import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Menu.module.css"
const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page1'>page 1</Link></li>
                <li><Link to='/page1/child1'>child1</Link></li>
                <li><Link to='/page1/child2'>child2</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
