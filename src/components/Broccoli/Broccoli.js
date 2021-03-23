import React from 'react';
import { Title, Image, ContainerText, Paragraph } from '../StartStyle';
import BroccoliBox from './BroccoliStyle'
import broccoli from '../../images/broccoli.svg'
const Broccoli = () => {
    return(
        <BroccoliBox>
            <ContainerText>
                <Title>Broccoli</Title>
                <Paragraph>Broccoli, green cabbage - a variety of vegetable cabbage. It is an annual plant belonging to the cabbage family, considered to be the ancestor of cauliflower. Probably from Cyprus. It was generally cultivated in ancient Greece and Rome under the term cyma.</Paragraph>
            </ContainerText>
            <Image src={broccoli} alt="broccoli"/>
        </BroccoliBox>
    )
}

export default Broccoli;