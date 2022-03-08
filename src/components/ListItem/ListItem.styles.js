import styled from 'styled-components';

export const WrapperLi = styled.li`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;