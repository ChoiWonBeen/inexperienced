import type { NextPage } from 'next';
import styled from "styled-components";
import SideLink from '../components/indexPage/SideLink';
import Winrate from '../components/indexPage/Winrate';
import DailyTodo from '../components/indexPage/DailyTodo';
import Calendar from '../components/indexPage/Calendar';

const HomeWrapper = styled.div`
  min-height: calc(100vh - 112px);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 5fr);
	row-gap: 10px;
	column-gap: 15px;
`

const WinrateGrid = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-row: 1/1;
`

const SideLinkGrid = styled.div`
  display: grid;
  grid-column: 1/1;
  grid-row: 1/6;
`

const DailyTodoGrid = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-row: 2/5;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-column: 5/6;
  grid-row: 1/3;
`

export default function MainPage<NextPage>(){
  return (
    <HomeWrapper>
			<SideLinkGrid>
				<SideLink></SideLink>
			</SideLinkGrid>
			
      <WinrateGrid>
        <Winrate></Winrate>
      </WinrateGrid>
			
			<DailyTodoGrid>
				<DailyTodo></DailyTodo>
			</DailyTodoGrid>
			
			<CalendarGrid>
				<Calendar></Calendar>
			</CalendarGrid>
    </HomeWrapper>
  )
}
