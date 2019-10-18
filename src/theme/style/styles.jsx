import styled from 'styled-components'

export const Wrapper = styled.div`
background: ${props => props.theme.white };
height: 100vh;
width: 100%;
`

export const SubWrapper = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
align-items:${props => props.alignItems ? props.alignItems : 'center'};
padding:${props => props.padding ? props.padding : '0'};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
margin:0 auto;
`
export const SubWrapperAlt = styled.div`
display:flex;
width:100%;
flex-direction: column;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
align-items:${props => props.alignItems ? props.alignItems : 'center'};
padding:${props => props.padding ? props.padding : '0'};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
`

export const ListWrapper = styled.div`
width:100%;
display: flex;
justify-content:flex-start;
align-items: center;
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
padding:${props => props.padding ? props.padding : '0' };
margin:${props => props.margin ? props.margin : '0' };
`
