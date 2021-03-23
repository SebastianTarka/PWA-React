import React, {useState} from 'react';
import { BurgerBox, BurgerButton, BurgerSpan,
    BurgerNav, BurgerContainerLink, BurgerList, BurgerLink } from './BurgerStyle'

const Burger = () => {
    const [nav, showNav] = useState(false)
    return(
        <BurgerBox onClick={() => showNav(!nav)}>
            <BurgerButton>
                <BurgerSpan nav={nav}/>
                <BurgerSpan nav={nav}/>
                <BurgerSpan nav={nav}/>
            </BurgerButton>
            <BurgerNav nav={nav}>
                <BurgerContainerLink>
                    <BurgerList>
                        <BurgerLink href="/">Home</BurgerLink>
                    </BurgerList>
                    <BurgerList>
                        <BurgerLink href="/">About</BurgerLink>
                    </BurgerList>
                    <BurgerList>
                        <BurgerLink href="/">Contact</BurgerLink>
                    </BurgerList>
                    <BurgerList>
                        <BurgerLink href="/">Blog</BurgerLink>
                    </BurgerList>
                </BurgerContainerLink>
            </BurgerNav>
        </BurgerBox>
    )
}

export default Burger;