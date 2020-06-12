import React from 'react';
import { MessagesContainer } from '../message/MessagesContainer'
import { StyledWindow } from './Window.styled'

export function Window(props) {
  const { name, subheader } = props.window
  return (
    <StyledWindow>
      <header>
        <div className="background">
          <span>{name}</span>
        </div>
      </header>
      <section>{subheader}</section>
      <main>
        <MessagesContainer/>
      </main> 
    </StyledWindow>
  )
}
