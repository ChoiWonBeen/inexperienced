import styled from "styled-components";

const HeaderBar = styled.div`
  border-bottom: 1px ${({theme}) => theme.colors.primary} solid;
  color: ${({theme}) => theme.colors.primary};
  font-size: 1.3rem;
`

const LogoText = styled.div`
  font-family: 'Moon Dance', cursive;
  font-size: 3rem;
  padding: 20px;
`

export default function Header(){
  return(
    <HeaderBar>
      <LogoText>toDo It!</LogoText>
    </HeaderBar>
  )
}