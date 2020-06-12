import React from 'react';
import { MessageList } from './MessageList'
import { AddMessage } from './AddMessage'
import { StyledMessagesContainer } from './MessagesContainer.styled'


export function MessagesContainer(props) {
  return (
    <StyledMessagesContainer className="message-container">
        <MessageList/>
        <AddMessage/>
    </StyledMessagesContainer>
  )
}
