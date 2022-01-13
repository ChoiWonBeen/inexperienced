import styled from "styled-components";

const HeaderBar = styled.div`
  border-bottom: 5px ${({theme}) => theme.colors.primary} solid;
  border-top: 5px ${({theme}) => theme.colors.primary} solid;
  
  color: ${({theme}) => theme.colors.primary};
  font-size: 1.3rem;
  // font-weight: bold;
`

const LogoText = styled.div`
  font-family: 'Moon Dance', cursive;
  font-size: 3rem;
  padding: 15px;
  margin-left: 20px;
`

export default function Header(){
  return(
    <HeaderBar>
      <LogoText>toDo It!</LogoText>
    </HeaderBar>
  )
}