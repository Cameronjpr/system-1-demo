import styled from '@emotion/styled'

export const StyledMenuItem = styled.ul`
  background: white;
  border: 0;
  display: block;
  font-size: 32px;
  font: inherit;
  list-style: none;
  position: fixed;
  padding: 0;
  margin-left: -16px;
  border: 2px solid black;
  color: black;
`

export const StyledOption = styled.li`
  font-family: Chicago;
  -webkit-appearance: none;
  padding: 8px;
  &:hover{
    cursor: pointer;
    color: white;
    background: black;
  }
`