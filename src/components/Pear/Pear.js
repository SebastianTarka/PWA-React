import React from 'react';
import { Title, Image, ContainerText, Paragraph } from '../StartStyle';
import PearBox from './PearStyle'
import pear from '../../images/pear.svg'
const Pear = () => {
    return(
        <PearBox>
        <Image src={pear} alt="pear"/>
            <ContainerText>
                <Title>Pear</Title>
                <Paragraph>They are often elongated, slightly conical at the peduncle and rarely recessed near the peduncle, the recess is more frequent at the calyx, and is not a rule. There is always a certain number of stone cells in the flesh of pears. The skin is coarse, grainy, green, yellow or brown, often russet. The axis of the fruit, in the long section, is fleshy, often full (in the apple tree solution), and the seed window is closed.</Paragraph>
            </ContainerText>
        </PearBox>
    )
}

export default Pear;