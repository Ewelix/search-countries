import React from 'react';
import {BsArrowLeft} from "react-icons/bs";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 6%;
    padding: 5px 30px;
    box-shadow: ${({theme}) => theme.shadow};

      @media (${({ theme }) => theme.device.m}) {
        margin-bottom: 1%;
      }
`

const NavButton = () => {
    return (
        <Button to="/"><BsArrowLeft/>Back</Button>
    );
};

export default NavButton;