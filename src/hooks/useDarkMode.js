import React, {useEffect, useState} from 'react';

const UseDarkMode = () => {
    const [mode, setMode] = useState('');

    const toggleMode = (modeValue) => {
      setMode(modeValue)
    }

    const setBodyCssClass = theme => {
        document.body.className = theme;
    }

    useEffect(() => {
        setBodyCssClass(mode)
    }, [mode])

    return [mode, toggleMode];
};

export default UseDarkMode;