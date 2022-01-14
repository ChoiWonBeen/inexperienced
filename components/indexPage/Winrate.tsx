import styled from "styled-components";

const WinrateWrapper = styled.div`
  margin-top: 20px;
`

const Card = styled.div`
  border: 1px #d0d7de solid;
  border-radius: 6px;
  width: 300px;
  height: 200px;
`

export default function Winrate(){
  return (
    <WinrateWrapper>
      <Card></Card>
    </WinrateWrapper>
  )
}