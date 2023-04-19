import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Content = styled.div`
  --background: ${(props) => props.theme['background-color']};
  --gradient: linear-gradient(130deg, #dbac2c, #8047f8);

  border: solid 1px transparent;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background: linear-gradient(var(--background), var(--background)) padding-box,
    var(--gradient) border-box;

  padding: 2.5rem;
  margin-top: 2.5rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  ul > li:not(:last-child) {
    margin-bottom: 2rem;
  }

  li:nth-child(1) > span {
    background: ${(props) => props.theme['purple-500']};
  }

  li:nth-child(2) > span {
    background: ${(props) => props.theme['yellow-500']};
  }

  li:nth-child(3) > span {
    background: ${(props) => props.theme['yellow-700']};
  }

  li > span {
    padding: 0.5rem;
    line-height: 0;
    border-radius: 50%;
  }

  li > div {
    display: flex;
    flex-direction: column;
  }
`
