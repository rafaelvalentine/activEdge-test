import styled from 'styled-components'


export const Pair = styled.div`
    display: flex;
    margin-top: .5rem;
`
export const PairSpace = styled(Pair)`
margin-top:0;
justify-content: space-between;
align-items: center;
`
export const NameContainer = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export const IMG = styled.img`
    margin-left: 40px;
    // &.rotateArrow{
    //   transform: rotate(90deg)
    // }
`

export const NameSpan = styled.span`
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
/* identical to box height */
color: ${props => props.theme.title};
`