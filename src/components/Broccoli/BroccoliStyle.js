import styled from 'styled-components'

const PearBox = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-template-columns:1fr 1fr;
    width: 100%;
    height: 100vh;
    background-color: #4aff4d;
    @media (max-width:700px){
        flex-direction: column;
        grid-template-columns: 1fr;
        height: auto;
    }
`
export default PearBox;