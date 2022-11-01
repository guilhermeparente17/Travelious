import React from 'react'
import Buttom from '../Buttom/Buttom'
import { FaBars} from 'react-icons/fa'

import {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderLi,
    MobileIcon
} from './Header.Elements'

const Header = ({ toggle }: any) => {
  return (
    <HeaderContainer>
        <HeaderLogo>Travelious</HeaderLogo>

        <MobileIcon onClick={() => toggle()}>
            <FaBars />
        </MobileIcon>

        <HeaderNav>
            <HeaderLi>Review</HeaderLi>
            <HeaderLi>Tips</HeaderLi>
            <HeaderLi>Alerts</HeaderLi>
            <HeaderLi>Blog</HeaderLi>
        </HeaderNav>

        <Buttom title='Sign in' />
        
    </HeaderContainer>
  )
}

export default Header