import styled from 'styled-components'

const BurgerBox = styled.div`
`
const BurgerButton = styled.button`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    right: 5px;
    width: 30px;
    height: 30px;
    top: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
`
const BurgerSpan = styled.span`
    position: relative;
    width: 30px;
    height: 4px;
    background-color: #282828;
    border-radius: 50px;
    transition: .2s linear;
    transform: ${({ nav }) => ( nav ? "translateY(8px) rotate(-45deg)" : "rotate(0)" )};
    &:nth-child(2){
        position: absolute;
        right: 0;
        width: ${({ nav }) => ( nav ? "30px" : "20px" )};
        opacity: ${({ nav }) => ( nav ? "0" : "1" )};
    }
    &:nth-child(3){
        right: 0;
        width: ${({ nav }) => ( nav ? "30px" : "20px" )};
        transform: ${({ nav }) => ( nav ? "translateY(-7px) rotate(45deg)" : "rotate(0)" )};
    }
`
const BurgerNav = styled.nav`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    top: 0;
    display: ${({ nav }) => ( nav ? "flex" : "none" )};
    justify-content: center;
    z-index: 1;
`
const BurgerContainerLink = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const BurgerList = styled.li`
    list-style: none;
`
const BurgerLink = styled.a`
    padding: 10px;
    text-decoration: none;
    color: #282828;
    font-size: 1.7rem;
`
export { BurgerBox, BurgerButton, BurgerSpan,
    BurgerNav, BurgerContainerLink, BurgerList, BurgerLink }