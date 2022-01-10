import styled from "styled-components";

const HeaderBar = styled.div`
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.primary};
`

export default function Header(){
  return(
    <div>
      <HeaderBar></HeaderBar>
    </div>
  )
}