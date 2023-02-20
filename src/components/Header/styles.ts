import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    span {
      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-500']};
      padding: 0.5rem;
      border-radius: 6px;
      font-size: 0.875rem;
      gap: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-500']};
      border: 0;
      padding: 0.5rem;
      line-height: 0;
      border-radius: 6px;

      cursor: pointer;
    }
  }
`
