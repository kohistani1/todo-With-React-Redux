import React from 'react'
import { useSelector } from 'react-redux'

import NameInput from "../Input/NameInput"
import NoteInput from "../Input/NoteInput"
import Overlay from '../Overlay/Overlay'


const RenderMe = () => {
 const activeUser = useSelector((state) => state.user.activeUser)
 return activeUser ? <NoteInput /> : (<NameInput />)

}

export default RenderMe