import React from 'react';
import { Title, Image, ContainerText, Paragraph } from '../StartStyle';
import TomatoBox from './TomatoStyle'
import tomato from '../../images/tomato.svg'
const Tomato = () => {
    return(
        <TomatoBox>
            <ContainerText>
                <Title>Tomato</Title>
                <Paragraph>The most popular cultivated and consumed species is the common tomato. Its fruits are vegetables according to the classification of food commodities. The fruit of the common tomato is low in calories. It contains 22 kcal in 100 grams. It is a good source of potassium, beta-carotene and vitamins C and E. Tomatoes also contain lycopene, which is healthy for humans. Yellow tomato varieties are sweeter and have a higher sugar content.</Paragraph>
            </ContainerText>
            <Image src={tomato} alt="tomato red"/>
        </TomatoBox>
    )
}

export default Tomato;