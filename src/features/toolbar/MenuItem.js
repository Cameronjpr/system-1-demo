import React from 'react';
import { StyledMenuItem, StyledOption } from './MenuItem.styled'

export function MenuItem(props) {
  return (
    props.open && (
    <StyledMenuItem>
     {props.children.map((child, i) => (
       <StyledOption key={i} href="#">
        {child.name}
      </StyledOption>
      ))}
    </StyledMenuItem>
    )
  )
}
