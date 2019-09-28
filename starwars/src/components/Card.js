import React from "react";
import styled from "styled-components";

// Styles
const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardDiv = styled.div`
  background-color: #ffffff;
  width: 350px;
  padding: 10px;
  margin-bottom: 20px;
`;

// Card
function Card({ characters }) {
  return (
    <WrapperDiv>
      {characters.map((index) => {
        return (
          <CardDiv>
            <h1>{index.name}</h1>
            <p>Date of Birth: {index.birth_year}</p>
            <p>Gender: {index.gender}</p>
            <p>Height: {index.height}</p>
            <p>Mass: {index.mass}</p>
            <p>Hair Color: {index.hair_color}</p>
            <p>Eye Color: {index.eye_color}</p>
          </CardDiv>
        );
      })}
    </WrapperDiv>
  );
}

export default Card;
