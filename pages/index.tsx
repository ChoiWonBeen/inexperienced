import type { NextPage } from 'next';
import styled from "styled-components";
import Shortcut from 'components/indexPage/Shortcut';
import Winrate from 'components/indexPage/Winrate';
import DailyTodo from 'components/indexPage/DailyTodo';
import Calendar from 'components/indexPage/Calendar';
import TitleDispenser from 'components/indexPage/TitleDispenser';
import { authFb } from 'static/fb.ts';

const HomeWrapper = styled.div`
  min-height: calc(100vh - 132px);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(3, 5fr);
	row-gap: 10px;
	column-gap: 15px;
`

const WinrateGrid = styled.div`
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
  grid-column: 2/5;
  grid-row: 1/1;
`

const SideLinkGrid = styled.div`
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
  grid-column: 1/1;
  grid-row: 1/6;
`

const DailyTodoGrid = styled.div`
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
  grid-column: 2/5;
  grid-row: 2/5;
`

const CalendarGrid = styled.div`
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
  grid-column: 5/6;
  grid-row: 1/3;
`

export default function MainPage<NextPage>(){
	console.log(authFb);
  return (
    <HomeWrapper>
			<SideLinkGrid>
				<TitleDispenser Component={Shortcut} titleText="ShortCut"></TitleDispenser>
			</SideLinkGrid>
			
      <WinrateGrid>
        <TitleDispenser Component={Winrate} titleText="My Winrate"></TitleDispenser>
      </WinrateGrid>
			
			<DailyTodoGrid>
				<TitleDispenser Component={DailyTodo} titleText="My Todo"></TitleDispenser>
			</DailyTodoGrid>
			
			<CalendarGrid>
				<TitleDispenser Component={Calendar} titleText="Calendar"></TitleDispenser>
			</CalendarGrid>
    </HomeWrapper>
  )
}
