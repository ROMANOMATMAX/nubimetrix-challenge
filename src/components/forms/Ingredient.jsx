import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";

const IngredientWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
`
const Input = styled.input.attrs({ 
  type: 'text',
})`
  -webkit-appearance: none;
  border: none;
  border: 1px solid #54B5BA;
  height: ${props => props.ingredient ? '40px' : '54px'};
  margin-left: ${props => props.ingredient ? '8px' : '0'};
  margin-right: ${props => props.ingredient ? '27.75px' : '0'};
  border-radius: 4px;
  width: 100%;
  &::placeholder {
    color: red;
  }
`
const AddIngredientIconWrapper = styled.div`
  color: #8DC63F;
  border: 1.5px solid #8DC63F;
  border-radius: 50%;
  width: 22.5px;
  height: 22.5px;
`;

export const Ingredient = ({
  ingredientData,
  ingredients,
  setIngredients
}) => {
  const deleteIngredientFromList = () => {
    setIngredients(ingredients.filter(ingredient => ingredient.number!== ingredientData.number))
  };

  return (
    <IngredientWrapper>
      <label htmlFor="">{ingredientData.number}</label>
      <Input
        disabled
        value={ingredientData.ingredient}
        ingredient
      />
      <FontAwesomeIcon
        color={'#F7941D'}
        icon={faTrashCan}
        fontSize='22px'
        onClick={deleteIngredientFromList}
      />
    </IngredientWrapper>
  )
};
