import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import { useDarkModeContext } from "../../providers/darkModeProvider";
import { SelectWrapper } from "./Filter.styles";

const options = [
    { label: 'All', value: 'all'},
    { label: 'Africa', value: 'Africa'},
    { label: 'America', value: 'Americas' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe'},
    { label: 'Oceania', value: 'Oceania' },
]

const Filter = ({ getCountriesByRegion }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const { mode } = useDarkModeContext();

    const handleChange = (e) => {
        setSelectedOption((e.value).toLowerCase());
    }

    useEffect(() => {
        getCountriesByRegion(selectedOption)
    }, [selectedOption])

    return (
        <SelectWrapper mode={mode}>
            <Select
                onChange={handleChange}
                options={options}
                value={options.find(obj => obj.value === selectedOption)}
                className="select"
                classNamePrefix="select"
                placeholder="Filter by Region"
            />
        </SelectWrapper>
    );
};

export default Filter;