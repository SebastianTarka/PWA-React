import React from 'react';
import { Title, Image, ContainerText, Paragraph } from '../StartStyle';
import GrapesBox from './GrapesStyle'
import grapes from '../../images/grapes.svg'
const Orange = () => {
    return(
        <GrapesBox>
        <Image src={grapes} alt="grapes"/>
            <ContainerText>
                <Title>Grapes</Title>
                <Paragraph>The grapes are those that come from the wild grape fruit of the Caspian Sea region. The beginnings of wine production date back to 8 thousand. years and took place in Georgia. The Egyptians already had the ability to grow grapevines and produce wine. The Romans gained viticulture in the Mediterranean.</Paragraph>
            </ContainerText>
        </GrapesBox>
    )
}

export default Orange