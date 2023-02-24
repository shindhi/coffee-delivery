import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['background-color']};
    background: ${(props) => props.color};
    padding: 0.5rem;
    line-height: 0;
    border-radius: 50%;
  }
`
