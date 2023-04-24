import styled from 'styled-components'

export const Container = styled.div`
  width: 4.5rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem 0.25rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: ${(props) => props.theme['purple-500']};
    border: none;
    background: transparent;
    padding: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
`
