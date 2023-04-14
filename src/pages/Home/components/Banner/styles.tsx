import styled from 'styled-components'

import background from '../../../../assets/background.svg'

export const BannerContainer = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 5.75rem 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  > div {
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
