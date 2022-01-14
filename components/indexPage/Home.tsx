import styled from "styled-components"
import Winrate from "./Winrate"

const HomeWrapper = styled.div`
  padding: 0 32px;
`

export default function Home(){

  return (
    <HomeWrapper>
      <Winrate></Winrate>
    </HomeWrapper>
  )
}