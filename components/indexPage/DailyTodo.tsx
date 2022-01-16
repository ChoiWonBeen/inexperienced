import styled from 'styled-components';

const DailyTodoWrapper = styled.div`
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
`

export default function DailyTodo(){
	return (
		<DailyTodoWrapper>
			
		</DailyTodoWrapper>
	)
}