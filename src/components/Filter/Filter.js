import React, { useState } from 'react';
import Select from 'react-select';
import { SelectWrapper } from "./Filter.styles";
import { useDarkModeContext } from "../../providers/darkModeProvider";

const options = [
    { label: 'Africa', value: 'Africa'},
    { label: 'America', value: 'America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe'},
    { label: 'Oceania', value: 'Oceania' },
]

const Filter = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { mode } = useDarkModeContext();

    return (
        <SelectWrapper mode={mode}>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="select"
                classNamePrefix="select"
                placeholder="Filter by Region"
            />
        </SelectWrapper>
    );
};

export default Filter;