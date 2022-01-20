import styled from 'styled-components';

const SideLinkWrapper = styled.div`
	
`

const Title = styled.div`
	${({theme}) => theme.titleMixin};
`

export default function SideLink(){
	return (
		<SideLinkWrapper>
			<Title>
				ShortCut
			</Title>
		</SideLinkWrapper>
	)
}