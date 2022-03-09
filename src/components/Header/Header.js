import React from 'react';
import {Wrapper} from "./Header.styles";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import {Container} from "../../views/MainTemplate/MainTemplate.styles";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Search/>
                <Filter/>
            </Container>
        </Wrapper>
    );
};

export default Header;