import React from 'react'

import {
    ButtomContainer
} from './Buttom.Elements'

type ButtonProps = {
    title: string
}

const Buttom = ({title}: ButtonProps) => {
  return (
    <ButtomContainer>
        {title}
    </ButtomContainer>
  )
}

export default Buttom