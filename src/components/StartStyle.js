import styled from 'styled-components';

const Title = styled.h1`
    font-size: 5rem;
    margin-bottom: 15px;
    @media (max-width:700px){
        text-align: center;
        padding: 10px;
    }
    @media (max-width:400px){
        font-size: 4rem;
    }
`
const Image = styled.img`
    width: 40%;
    @media (max-width:700px){
        width: 60%;
        padding: 20px;
    }
`
const ContainerText = styled.div`
    width: 50%;
    @media (max-width:700px){
        width: 100%;
    }
`
const Paragraph = styled.p`
    margin: 10px;
    @media (max-width:700px){
        padding: 10px;
    }
`
export { Title, Image, ContainerText, Paragraph }