import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.GREY_300};

  margin-bottom: 8px;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;

    font-size: 2.4rem;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};

    display: flex;
    align-items: center;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
