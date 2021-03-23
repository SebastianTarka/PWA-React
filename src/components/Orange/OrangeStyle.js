import styled from 'styled-components'

const OrangeBox = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-template-columns:1fr 1fr;
    width: 100%;
    height: 100vh;
    background-color: #ffc233;
    @media (max-width:700px){
        flex-direction: column;
        grid-template-columns: 1fr;
        height: auto;
    }
`
export default OrangeBox;