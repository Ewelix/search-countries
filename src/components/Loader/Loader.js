import React from 'react';
import styled from "styled-components";

const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = ({ error }) => {
    return (
        <LoaderWrapper>
            <h3>{error ? 'Sorry, something went wrong...' : 'Loading...'}</h3>
        </LoaderWrapper>
    );
};

export default Loader;