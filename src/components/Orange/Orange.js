import React from 'react';
import { Title, Image, ContainerText, Paragraph } from '../StartStyle';
import OrangeBox from './OrangeStyle'
import orange from '../../images/orange.svg'
const Orange = () => {
    return(
        <OrangeBox>
            <ContainerText>
                <Title>Orange</Title>
                <Paragraph>Sweet orange juice is a conspiracy of a large amount of vitamin C. One fruit contains more of it than the daily requirement of an adult human. The fruit also contains large amounts of aspartic acid (150 mg per 100 g), glutamic acid (129 mg per 100 g) and glycine (109 mg per 100 g). In the membrane that separates the place of the fruit from the skin, the local interior is pectin, a type of fiber. There are also bioflavonoids in it</Paragraph>
            </ContainerText>
            <Image src={orange} alt="orange"/>
        </OrangeBox>
    )
}

export default Orange