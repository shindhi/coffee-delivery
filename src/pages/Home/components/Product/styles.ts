import styled from 'styled-components'

export const Item = styled.div`
  max-width: 16rem;
  padding: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: -1.5rem;
  }
`
export const Tags = styled.div`
  margin-top: 4.75rem;
  padding: 1rem 0;
  display: flex;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme['yellow-100']};
    border-radius: 50px;

    color: ${(props) => props.theme['yellow-700']};
    font-weight: 700;
    font-size: 0.625rem;
  }
`

export const InfoItem = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`

export const Buy = styled.div`
  width: 100%;
  padding: 0.25rem;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;

  display: flex;
  align-items: center;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto';
    vertical-align: baseline;
  }
`

export const ButtonCart = styled.button`
  background: ${(props) => props.theme['purple-700']};
  padding: 0.5rem;

  border: none;
  border-radius: 6px;
  line-height: 0;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`
