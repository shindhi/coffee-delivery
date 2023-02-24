import styled from 'styled-components'

import background from '../../assets/background.svg'

export const BannerContainer = styled.section`
  /* background-image: url(${background}); // revisar */
  padding: 5.75rem 0;

  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  div {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 130%;
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const InfoWrapper = styled.div`
  margin-top: 4.125rem;
  font-size: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['background-color']};
    background: ${(props) => props.theme['yellow-700']};
    padding: 0.5rem;
    line-height: 0;
    border-radius: 50%;
  }
`
