import styled from 'styled-components';
import Background from '../Assets/Mushroom.jpeg'

export const OuterWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-family: 'Oldenburg', cursive;
  position: relative;
  
    @media (max-width: 600px) {
   padding-bottom: 20px;
  }
`
export const InnerWrapper = styled.section`
 width: 85%;

  @media (min-width: 668px) {
    width: 75%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 55%;
  }
`

export const CardContainer = styled.div` 
    margin-top: 40px;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 0 50px #90ac8e;
    height: 80vh;
    font-size: 17px;
    overflow: auto;
    background-color: ${(props) => props.bgColor || 'rgb(86, 135, 98, 0.8)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    border: 2px solid red;

`
export const StyledButton = styled.button`

  font-weight: 600;
  color: #fff !important;
  text-decoration: none;
  background: #61481C;
  padding: 15px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  width: 8em;
  cursor: pointer;
  &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
      
  }
`
/* Styling of description  */

export const LocationText = styled.p`
  font-size: 20px;
  font-weight: 100;
  width: 80%;
text-shadow: rgb(229, 229, 13) -4px 2px 27px;
color: black;

  @media (min-width: 668px) {
  font-size: 25px;
  }

  @media (min-width: 1000) {
  font-size: 30px;
  }
`
/* Styling choises box */

export const Choice = styled.p`
  font-size: 30px;
  margin:10px;
  font-weight: 600;
  margin-bottom: 30px;
  @media (min-width: 668px) {
  font-size: 40px;
  margin-bottom: 40px;
  }
`

export const SingleChoice = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 7px 0px #888888;
  margin: 10px;
  width: 65vw;
    background: rgb(231 219 178);
    border-radius: 73px 5px 74px 0px;
-moz-border-radius: 73px 5px 74px 0px;
-webkit-border-radius: 73px 5px 74px 0px;
    box-shadow: rgba(11, 8, 7, 11.1) -1px 4px 30px;
border: 1px solid rgba(213, 146, 131, 0.3);

  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width:  50vw;
    max-height: 50vh;
  }

  @media (min-width: 900px) {
    width:  30vw;
    max-height: 35vh;

  }

  @media (min-width: 1000) {
    width:  20vw;
    height: 20vh;
  }
`
