/*eslint-disable*/
import styled from 'styled-components'
    
  
export const StyledNavContainer = styled.div`
    height: 6vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    list-style-type: none;
    background-color: rgb(16, 19, 64);
    a {
    color: white;
    font-weight: lighter;
    font-size: 1em;
    text-decoration-line:none;
    }

    a:hover {
        font-size: 1.1em;
        font-weight: bolder;
        color: white;
        text-decoration-line:none;
    }`


export const StyledNavBar = styled.div`
    display: flex;
    width: 30vw;
    justify-content: space-around;`


export const StyledHomeButton = styled.div`
    margin-left: 15px;`


export const StyledLoginButton = styled.button`
    color: #f7d037;
    background-color: rgb(16, 19, 64);
    font-size: 1em;
    text-decoration-line:none;

    &:hover {
        font-size: 1.1em;
        font-weight: bolder;
        text-decoration-line:none;
    }
    `

export const StyledNavList = styled.div`
    color: white;
    background-color: rgb(16, 19, 64);

    .active{
        color: #f7d037;
    }
    .active:hover{
        color: #f7d037;
    }
    `

