import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const ListItem = styled.li`
  padding: 4px 4px;
  display: flex;
  outline: 1px solid black;
  justify-content: space-between;
  border-radius: 4px;
  width: 30%;
`;
export const Button = styled.button`
  width: 60px;
  height: 20px;
  background-color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  &:active {
    background-color: #0d89d6;
  }
`;
