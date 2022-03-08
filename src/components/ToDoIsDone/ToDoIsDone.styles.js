import styled from 'styled-components';

export const DoneWrapper = styled.div`
  display: flex;
  color: aliceblue;
  font-weight: bold;
  text-line-through: single;
  padding: 4px 8px;
  margin-right: 8px;
  
  border-radius: 4px;

  background: ${({ theme, isDone }) => {
    if ( isDone ) return theme.colors.success;
    if ( !isDone ) return theme.colors.error;
  }};
`;