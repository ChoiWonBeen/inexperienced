import styled from "styled-components";

const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	font-style: italic;
	padding: 10px;
`

export default function IndexComponentWithTitle({Component, titleText}){
	
	return (
		<>
			<Title>
				{titleText}
			</Title>
			<Component/>
		</>
	)
}