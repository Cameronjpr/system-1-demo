import styled from '@emotion/styled'

export const StyledToolbar = styled.nav`
  margin: 0;
  margin-bottom: 1em;
  background-color: white;
  color: black;
  text-align: left;
  width: 100vw;
  border-bottom: 2px solid black;
  line-height: 30px;
  height: 32px;
  font-family: Chicago;
`
  
  export const StyledToolbarUl = styled.ul`
  list-style: none;
  display: flex;
  vertical-align: center;
  height: 30px;
  margin: 0;
`

export const StyledToolbarItem = styled.li`
  background: white;
  z-index: 10;
  line-height: 30px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${props => props.open ? 'white' : 'black'};
  background: ${props => !props.open ? 'white' : 'black'};
  &:hover{
    cursor: pointer;
  };
`