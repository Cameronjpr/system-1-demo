import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postMessage } from './messageSlice'
import {
  StyledMessageForm,
  StyledAddMessageInput,
  StyledAddMessageButton,
} from './AddMessage.styled'

export function AddMessage(props) {
  const dispatch = useDispatch()
  const [text, setText] = useState(' ')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postMessage(text) || '')
    setText('')
  }

  return (
    <StyledMessageForm onSubmit={(e) => handleSubmit(e)}>
      <StyledAddMessageInput
        aria-label="Enter text"
        value={text}
        onChange={(e) => setText(''+e.target.value)}
      />
      <StyledAddMessageButton>Send</StyledAddMessageButton>
    </StyledMessageForm>
  )
}
