import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: row;
  gap: 2.3125rem;

  div.payment-form {
    display: grid;
    flex: 1;
    gap: 12px;
  }
`

export const Title = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
`

export const Order = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  form {
    margin-top: 2rem;

    display: flex;
    gap: 1rem;
    flex-direction: column;

    input {
      width: 100%;
      padding: 12px;
      background: ${(props) => props.theme['base-input']};

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;

      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }

    input.cep,
    input.numero,
    input.bairro {
      max-width: 200px;
    }

    input.uf {
      max-width: 60px;
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  gap: 12px;

  div.optional-field {
    width: 100%;
    position: relative;
  }

  div.optional-field::after {
    content: attr(data-optional);
    position: absolute;
    right: 12px;
    top: 50%;
    font-size: 0.75rem;
    transform: translateY(-50%);
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
  }
`

export const TitleCard = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;

  div {
    p {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }
`

export const PaymentMethod = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  ul {
    margin-top: 2rem;

    list-style: none;

    display: flex;
    gap: 12px;

    li {
      flex: 1;
    }
  }

  li > button {
    width: 100%;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: none;
    padding: 1rem;

    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};

    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;
  }
`

export const ConfirmOrder = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;

  > div {
    display: grid;
    gap: 1.5rem;

    hr {
      background: ${(props) => props.theme['base-button']};
      height: 1px;
      border: none;
    }
  }
`

export const ItemCart = styled.div`
  min-width: 368px;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const ItemCartDetails = styled.div`
  color: ${(props) => props.theme['base-subtitle']};

  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    gap: 8px;
    flex-direction: column;
  }
`

export const ItemCartActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  line-height: 0;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  border: none;
  border-radius: 8px;

  cursor: pointer;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`

export const TotalOrder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;

    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;
  }

  div.total-order {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme['yellow-500']};
  padding: 12px;

  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
`
