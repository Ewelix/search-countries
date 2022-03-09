import React from 'react';


const Filter = () => {
    const [region, setRegion] = React.useState('');

    const handleChange = (event) => {
        setRegion(event.target.value);
    };

    return (
        <div>hi</div>
    );
};

export default Filter;