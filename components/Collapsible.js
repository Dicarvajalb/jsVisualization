import React from 'react';
import useCollapse from 'react-collapsed';
import '../styles/collapsible.module.css'
function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? '↑' : '↓'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.holeStatement} <br/><br/>
            </div>
        </div>
    </div>
    );
}

export default Collapsible