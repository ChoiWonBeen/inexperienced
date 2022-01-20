import styled from "styled-components";

const WinrateWrapper = styled.div`
  
`

const Title = styled.div`
	${({theme}) => theme.titleMixin};
`

const Card = styled.div`
  border-radius: 6px;
  width: 100%;
  height: 100%;
`

export default function Winrate(){
  return (
    <WinrateWrapper>
			<Title>
				My Winrate
			</Title>
      <Card>
			
			</Card>
    </WinrateWrapper>
  )
}