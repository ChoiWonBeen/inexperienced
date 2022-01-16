import styled from "styled-components";

const WinrateWrapper = styled.div`
  
`

const Card = styled.div`
  border: 1px ${({theme}) => theme.colors.borderDefault} solid;
  border-radius: 6px;
  width: 100%;
  height: 100%;
`

export default function Winrate(){
  return (
    <WinrateWrapper>
      <Card></Card>
    </WinrateWrapper>
  )
}