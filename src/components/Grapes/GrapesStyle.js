import styled from 'styled-components'

const GrapesBox = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-template-columns:1fr 1fr;
    width: 100%;
    height: 100vh;
    color: #eee;
    background-color: #7a21ff;
    @media (max-width:700px){
        flex-direction: column;
        grid-template-columns: 1fr;
        height: auto;
    }
`
export default GrapesBox;