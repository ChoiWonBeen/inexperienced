import type { NextPage } from 'next';
import styled from "styled-components";
import Winrate from '../components/indexPage/Winrate';

const HomeWrapper = styled.div`
  height: 100%;
  padding: 0 32px;
  display: grid;
  min-height: calc(100vh - 102px);
`

const WinrateGrid = styled.div`
  display: grid;
  grid-column: 2/2;
  grid-row: 2/2;
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
