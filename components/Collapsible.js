import React from 'react';
import useCollapse from 'react-collapsed';
import '../styles/collapsible.module.css'
function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? '¡' : props.statementType}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    );
}

export default Collapsible