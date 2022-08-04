import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 59rem;
  width: 21.375rem;
  background-image: url("/images/aside-banner.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  color: #454222;
`

export const AsideImageBanner = () => {
  return (
    <Container />
  )
}
