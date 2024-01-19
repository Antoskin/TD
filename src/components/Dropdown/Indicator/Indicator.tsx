import React from 'react';
import {components} from "react-select";

const Indicator = (props): any => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
            {props.selectProps.menuIsOpen ? <i className={'icon-up'} /> : <i className={'icon-down'} />}
            </components.DropdownIndicator>
        )
    );
};

export default Indicator;
