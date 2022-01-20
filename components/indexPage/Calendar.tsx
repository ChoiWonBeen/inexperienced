import styled from 'styled-components';

const CalendarWrapper = styled.div`
	
`

const Title = styled.div`
	${({theme}) => theme.titleMixin};
`

export default function Calendar(){
	return (
		<CalendarWrapper>
			<Title>
				Calendar
			</Title>
		</CalendarWrapper>
	)
}