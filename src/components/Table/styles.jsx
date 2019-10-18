import styled from 'styled-components'

export const Wrapper = styled.section`
padding: ${props => props.padding ? props.padding : '50px 80px'};
width: 100%;
height: 100%;
`
export const Container = styled.div`

background: ${props => props.theme.white} !important;
`
export const Thead = styled.thead`
background: ${props => props.theme.faintBlue};
tr th{
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.title};
  padding: 20px 83px;
  border: none;
}
&.jobtable tr th{
  padding: 20px 30px;
}
`
export const Tbody = styled.tr`
  td{
  border: none;
  border-bottom: 1px solid #eeeeee !important;
  padding: 16px 0;
  padding-left: 83px;
  padding-right: 50px;
}
&.jobtable td{
  padding-left: 33px;
  padding-right: 10px;
}
`

export const Text = styled.p`
font-size: 12px;
line-height: 16px;
text-transform: capitalize
color: ${props => props.altText ? props.theme.green : props.theme.text};
margin:0;
`
export const TextAlt = styled(Text)`
overflow-wrap: break-word;
word-wrap: break-word;
hyphens: auto;
`
export const SubText = styled(Text)`
font-size: 10px;
line-height: 14px;
color: ${props => props.altSubText ? props.theme.blue : props.theme.text};
`

export const SideBy = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
padding:0;
margin:0;
`
export const Stacked = styled(SideBy)`
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-left: 5px;

`
export const Completed = styled.div`
width: 78px;
height: 24px;
padding: 5px 10px;
border-radius: 2px;
text-align: center;
background: ${props => props.theme.lightElectricBlue};
font-size: 10px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  font-weight:bold;
span{
  color: ${props => props.theme.blue};
}
`
export const Accepted = styled(Completed)`
background: ${props => props.alt ? props.theme.lightOrange : props.theme.lightGreen};
span{
  color: ${props => props.alt ? props.theme.mediumOrange : props.theme.green};;
}
`
export const Edit = styled(Text)`
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 14px;
color: ${props => props.theme.blue};
cursor:pointer;
`
export const Delete = styled(Edit)`
color: ${props => props.theme.orange};
`