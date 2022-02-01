import styled from 'styled-components';

const DailyTodoWrapper = styled.div`
	margin-bottom: 10px;
`

const Block = styled.div`
	margin-top: 10px;
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
	let diff:number = Number(new Date(t)) - Number(new Date());
	if(Math.floor(diff / 1000 / 60) <= 0){
		return "Soon!";
	}
	else if(Math.floor(diff / 1000 / 60) < 60){
		return `${Math.floor(diff / 1000 / 60)}m left`;
	}
	else if(Math.floor(diff / 1000 / 60 / 60) < 24){
		return `${Math.floor(diff / 1000 / 60 / 60)}h left`;
	}
	else {
		return `${Math.floor(diff / 1000 / 60 / 60 / 24)}days left`;
	}
}

export default function DailyTodo(){
	const tempTodo = [
		{
			id: 1,
			title: "Daily Todo",
			due: "2022-01-20",
			data: [
				{
					desc: "커밋 1개 하기"
				},
				{
					desc: "알고리즘 1문제 풀기"
				}
			]
		},
		{
			id: 2,
			title: "Weekly Todo",
			due: "2022-01-27",
			data: [
				{
					desc: "좋은 글 1개 읽기"
				},
				{
					desc: "비기너 강의 준비하기"
				}
			]
		}
	]
	
	return (
		<DailyTodoWrapper>
			{tempTodo.map((todoList) => {
				return (
				<Block key={todoList.id}>
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
											{getLeftTime(todoList.due)}
										</TimeLeft>
									</Todo>
								)
							})}
							</TodoList>
						</TodoListWrapper>
					</Block>
					)
				})
			}
		</DailyTodoWrapper>
	)
}