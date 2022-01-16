import type { NextPage } from 'next';
import styled from "styled-components";
import Winrate from '../components/indexPage/Winrate';

const HomeWrapper = styled.div`
  min-height: calc(100vh - 112px);
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 200px);
`

const WinrateGrid = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-row: 1/1;
`

export default function MainPage<NextPage>(){
  return (
    <HomeWrapper>
      <WinrateGrid>
        <Winrate></Winrate>
      </WinrateGrid>
    </HomeWrapper>
  )
}
