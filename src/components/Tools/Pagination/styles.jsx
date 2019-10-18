import styled from 'styled-components'
import { device } from '../../device'


export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
height: 85px;
width:100%;
background:${props => props.theme.white};
padding:35px 64px;
font-size: 12px;
line-height: 16px;
color: ${props => props.theme.cardName};
@media ${device.desktop}{
  &.userPagination{
    width:94%;
    position:fixed;
    bottom:50px;
  }
}

`
export const Button = styled.button`
width: 25px;
height: 25px;
background:${props => props.theme.transparent};
border: none;
`

export const SelectContainer = styled.div`
display:flex;
justify-content:center;
align-items:center
span.selectedText{
margin:0 16px;
}
`
export const PageNumberWrapper = styled(SelectContainer)`
justify-content:space-around;
`
export const PageNumber = styled.span`
color: ${ props => props.active ? props.theme.green : '#C8C8C8'};
margin:0 6px;
cursor:pointer;
:hover{
  color: ${ props => props.theme.green};
}
`