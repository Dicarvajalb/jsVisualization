import React from 'react';
import useCollapse from 'react-collapsed';
import styles from '../styles/collapsible.module.css'
function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className={styles["collapsible"]}>
        <div className="header" {...getToggleProps()}>
            {isExpanded ? '▼' : '▲'}
        </div>
        <div {...getCollapseProps()}>
            <div className={styles["content"]}>
                {props.children}
            </div>
        </div>
    </div>
    );
}

export default Collapsible