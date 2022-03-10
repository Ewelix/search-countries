import React from 'react';
import {BsArrowLeft} from "react-icons/bs";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    margin-bottom: 6%;
`

const NavButton = () => {
    return (
        <Button to="/"><BsArrowLeft/>Back</Button>
    );
};

export default NavButton;