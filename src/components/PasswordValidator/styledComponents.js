// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`
export const PasswordValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  background-color: #383a4e;
  border-radius: 12px;
  height: 30vh;
  width: 65%;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    height: 42vh;
    width: 50%;
    min-width: 520px;
    max-width: 600px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  margin: 0px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`
export const Text = styled.p`
  color: #f8fafc;
  text-align: center;
  font-family: 'Roboto';
  font-size: 15px;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 15px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 30px;
  }
`

export const PasswordInput = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 15px;
  height: 45px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 15px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    height: 50px;
    margin-top: 30px;
    min-width: 380px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 10px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
