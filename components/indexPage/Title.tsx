import styled from "styled-components";

const TitleText = styled.div`
	font-size: 20px;
	font-weight: bold;
	font-style: italic;
	padding: 10px;
`

export default function Title({Component, titleText}: any){
	
	return (
		<>
			<TitleText>
				{titleText}
			</TitleText>
			<Component/>
		</>
	)
}