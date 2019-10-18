import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
.lds-ring {
  display: flex;
  justify-content:center;
  align-items: center;
  position: relative;
  width: 44px;
  height: 44px;
  margin:0 auto;
}
.lds-ring div {
  align-self: center;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 31px;
  height: 31px;
  margin:0 auto;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
&.landingSeach .lds-ring{
  width: 30px;
  height: 30px;
  padding:0 5px;
}
&.landingSeach .lds-ring div {
  width: 20px;
  height: 20px;
  margin:5px 0 0;
}
&.chatLoading lds-ring{
  width: 30px;
  height: 30px;
  padding:0 5px;
}
&.chatLoading .lds-ring div {
  width: 20px;
  height: 20px;
  margin:0 auto;
}
`
const Spinner = ({ ...props }) => {
  return (
    <Container {...props}>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </Container>
  )
}

export default Spinner
