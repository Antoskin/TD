import React, {useState} from 'react';
import Select from 'react-select';
import { Indicator as DropdownIndicator } from "./Indicator";
import {optionList} from "../../const";
import {selectStyles} from './style';

export type OptionType = {
    id: number;
    type: string;
}

interface ArrayObjectSelectState {
    selectedVehicle: OptionType
}

function Dropdown({optionState, onSort}) {
    const [state, setState] = useState<ArrayObjectSelectState>({
        selectedVehicle: {
            ...optionState
        },
    });

    const onChange = ({selectedVehicle}): void => {
        setState({selectedVehicle})
        onSort(selectedVehicle.type)
    }

    return (
        <Select
            styles={selectStyles}
            value={state.selectedVehicle}
           // onChange={(option: OptionType ) => {setState({ selectedVehicle: option })}}
            onChange={(option: OptionType ) => onChange({selectedVehicle: option})}
            getOptionLabel={(vehicle: OptionType) => vehicle.type}
            getOptionValue={(vehicle: OptionType) => vehicle.type}
            components={{
                DropdownIndicator
            }}
            options={optionList}
            isMulti={false}
            //menuIsOpen={true}
        />
    );
}

export default Dropdown;
