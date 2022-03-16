import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const baseURL = 'https://restcountries.com/v2';

const useCountries = () => {
    const getAllCountries = useCallback(async () => {
        try {
            const result = await axios.get(`${baseURL}/all`);
            return result.data;
        } catch (e) {
            console.log(e);
        }
    }, []);

    const getCountry = useCallback(async (code) => {
        try {
            const result = await axios.get(`${baseURL}/alpha/${code}`);
            return result.data.country;
        } catch (e) {
            console.log(e);
        }
    }, []);

    const searchByName = useCallback(async (str) => {
        try {
            const result = await axios.get(`${baseURL}/name/${str}`);
            return result.data;
        } catch (e) {
            console.log(e);
        }
    }, []);

    return {
        getAllCountries,
        getCountry,
        searchByName
    };
};

export default useCountries;