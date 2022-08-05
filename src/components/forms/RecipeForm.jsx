import React, { useState } from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from '../recipes/ToggleSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IngredientList } from './IngredientList';

const FormWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  background-color: rgba(30, 54, 70, 0.3);
`;

const Form = styled.form`
  position: relative;
  width: 29rem;
  height: 100vh;
  background: #fff;
  padding: 27.5px 27.5px 0 27.5px;
`;

const FormTitle = styled.h3`
  font-family: "Poppins", Times, serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 24px;
`;

const IngredientWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const TextArea = styled.textarea`
  -webkit-appearance: none;
  border: none;
  border: 1px solid #54B5BA;
  border-radius: 4px;
  height: 172px;
  width: 100%;
`

const FormSectionTitle = styled.p`
  font-family: "Poppins", Times, serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 16px;
`

const FormInputWrapper = styled.div`
  margin-bottom: 42px;
`

const CloseModal = styled.div`
  position: absolute;
  top: 27.5px;
  right: 27.5px;
`;

const AddIngredientIconWrapper = styled.div`
  color: #8DC63F;
  border: 1.5px solid #8DC63F;
  border-radius: 50%;
  width: 22.5px;
  height: 22.5px;
`;

export const RecipeForm = ({ changeModalStatus }) => {
  const [ingredients, setIngredients] = useState([]);

  return (
    <FormWrapper>
      <Form>
        <FormTitle>Nueva Receta</FormTitle>
        <CloseModal onClick={() => changeModalStatus(prev => !prev)}>
          <FontAwesomeIcon size='2x' icon={faClose} fontSize='12px'/> 
        </CloseModal>
        <FormInputWrapper>
          <label htmlFor="name">
            <FormSectionTitle>Nombre de la receta</FormSectionTitle>
          </label>
          <Input id='name'placeholder="Olla caliente de carne y arroz en olla de cocción lenta" />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormSectionTitle>Ingredientes</FormSectionTitle>
          <IngredientList />
        </FormInputWrapper>
        <FormInputWrapper>
          <label htmlFor="preparation">
            <FormSectionTitle>Preparacion</FormSectionTitle>
          </label>
          <TextArea name="" id="preparation" cols="30" rows="10"></TextArea>
        </FormInputWrapper>
        <FormInputWrapper>
          <FormSectionTitle>Reseñas</FormSectionTitle>
          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Huey</label>
          </div>
          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Dewey</label>
          </div>
          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label for="louie">Louie</label>
          </div>
        </FormInputWrapper>
        <FormInputWrapper>
          <FormSectionTitle>Cocinado antes</FormSectionTitle>
          <ToggleSwitch />
        </FormInputWrapper>
      </Form>
    </FormWrapper>
  )
}
