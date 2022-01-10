import styled from "styled-components";

const HeaderBar = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  font-size: 1.3rem;
`

export default function Header(){
  return(
    <div>
      <HeaderBar>
        제목
      </HeaderBar>
    </div>
  )
}