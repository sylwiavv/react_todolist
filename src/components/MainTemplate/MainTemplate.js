import React from 'react';
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../Title/Title.styles";
import ToDo from "../ToDo/ToDo";

const MainTemplate = () => {
    return (
        <Wrapper>
            <Title>ToDo list</Title>
            <ToDo />
        </Wrapper>
    );
};

export default MainTemplate;
