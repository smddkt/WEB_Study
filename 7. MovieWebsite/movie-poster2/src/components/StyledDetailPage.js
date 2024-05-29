/*eslint-disable*/
import styled from 'styled-components'

export const StyledDetailBackground = styled.div`
    background-image: url(${props => `https://image.tmdb.org/t/p/w500/${props.posterPath}`});
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: 33.33333% 100%;
    background-position: center center;
    opacity: 0.1;
    `

export const StyledDetailContainer = styled.div`
    display: flex;
    z-index: 1 ;
    color: white;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    img{
        max-width: 20vw;
        max-height: 50vh;
        box-shadow: 0px 0px 50px #010232;
        margin-right: 2%;
    }
    `


export const StyledDetailInfo = styled.div`

    margin-left:2%;
    flex-basis: 30%;    
    width:30vw;
    color: white;
    title{
        font-size: 1.5em;
    }
    .text{
        font-weight: bold;
    }
    .stars{
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(${props => Math.floor(props.voteAverage)+1}+1, 1fr);
        width: 50%;
        grid-auto-flow: column;
    }
    p{
        font-weight: bold;
        font-size: 1.2em;
    }
    span{
        font-size: 1.2em;
        line-height: 1.8;
    }`