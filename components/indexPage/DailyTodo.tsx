import styled from 'styled-components';

const DailyTodoWrapper = styled.div`
	margin-bottom: 10px;
`

const SubTitleWrapper = styled.div`
  width: 100%;
	padding-top: 10px;
	margin-bottom: 10px;
`

const SubTitle = styled.span`
  width: 100%;
	height: calc(100% + 10px);
	padding: 10px;
	margin-top: 10px;
  border: 1px green solid;
	border-bottom: none;
`

const TodoListWrapper = styled.div`
	border: 1px green solid;
	padding: 10px;
	
`

const TodoList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const Todo = styled.div`
	cursor: pointer;
	padding: 5px;
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
	border-radius: 5px;
`

const Desc = styled.span`
	
`

const TimeLeft = styled.span`
	float: right;
`

const CheckBox = styled.input`
	float: right;
`

function getLeftTime(t: string): string{
	
	// Math.floor((new Date(t) - new Date()) / 1000 / 60 / 60)
}

export default function DailyTodo({todoList}){
	return (
		<DailyTodoWrapper>
			<SubTitleWrapper>
				<SubTitle>
					{todoList.title}
				</SubTitle>
			</SubTitleWrapper>
			<TodoListWrapper>
				<TodoList>
					{todoList.data.map((data, idx) => {
						return (
							<Todo key={idx}>
								<Desc>
									{data.desc}
								</Desc>
								<CheckBox type="checkbox"></CheckBox>
								<TimeLeft>
									21h left
								</TimeLeft>
							</Todo>
						)
					})}
				</TodoList>
			</TodoListWrapper>
		</DailyTodoWrapper>
	)
}