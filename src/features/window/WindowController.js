import React from 'react';
import { Window } from './Window'
import { selectWindows } from './windowSlice'
import { useSelector} from 'react-redux'

export function WindowController(props) {
  const windows = useSelector(selectWindows)
  return (
    windows.map((window, i) => (
      <Window key={i} window={window}/>
    ))
  )
}
