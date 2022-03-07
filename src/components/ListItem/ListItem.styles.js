import styled from 'styled-components';

export const WrapperLi = styled.li`
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;