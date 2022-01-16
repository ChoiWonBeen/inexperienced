import styled from 'styled-components';

const SideLinkWrapper = styled.div`
	border-right: 1px ${({theme}) => theme.colors.borderDefault} solid;
`

export default function SideLink(){
	return (
		<SideLinkWrapper>
			
		</SideLinkWrapper>
	)
}