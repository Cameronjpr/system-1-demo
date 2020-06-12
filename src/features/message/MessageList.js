import { css } from 'emotion'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThread } from './messageSlice'
import { Message } from './Message'
import { StyledMessageList } from './MessageList.styled'

export function MessageList(props) {
  const thread = useSelector(selectThread)
  return (
    <StyledMessageList className={css``}>
      {thread.map((msg, i) => (
        <Message key={i} msg={msg} last={i === thread.length-1}/>
      ))}
    </StyledMessageList>
  )
}
