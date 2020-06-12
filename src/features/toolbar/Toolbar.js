import React from 'react';
import { StyledToolbar, StyledToolbarUl, StyledToolbarItem } from './Toolbar.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toggleItem } from './toolbarSlice'
import { MenuItem} from './MenuItem'
import { selectItems } from './toolbarSlice'

export function Toolbar(props) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems)

  const handleClick = (id) => {
    dispatch(toggleItem(id))
  }

  return (
    <StyledToolbar>
      <StyledToolbarUl>
        <div className="apple-logo"></div>
        { items.map((item, i) => (
          <StyledToolbarItem key={i} onClick={() => handleClick(i)} open={item.open}>
            {item.name}
            <MenuItem children={item.children} open={item.open}/>
          </StyledToolbarItem>
        ) 
        )}
      </StyledToolbarUl>
    </StyledToolbar>
  )
}
