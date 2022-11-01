import React from 'react'
import { ButtonContainer, Icon, Title } from './ButtonTravel.Elements'
import { IoIosAirplane } from "react-icons/io";
import { FaHotel } from "react-icons/fa";

type ButtonTravelProps = {
    icon: any,
    title: string

}

const ButtonTravel = ({icon, title}: ButtonTravelProps) => {
  return (
    <ButtonContainer>
        {title === 'Flight' ? <IoIosAirplane size={22} color='#fff' /> : <FaHotel size={20} color='#fff' />}
        <Title>{title}</Title>
    </ButtonContainer>
  )
}

export default ButtonTravel