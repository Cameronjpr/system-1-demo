import React, { useRef, useEffect }  from 'react';
import { StyledMessage } from './Message.styled'

export function Message(props) {
  const msgRef = useRef(null);

  useEffect(() => {
    msgRef.current.scrollIntoView();
  });

  return (
    <StyledMessage ref={msgRef}>
      <span>{props.msg.text}</span>
    </StyledMessage>
  )
}
