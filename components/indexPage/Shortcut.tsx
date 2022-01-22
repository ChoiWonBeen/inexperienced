import styled from 'styled-components';

const ShortcutWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	
`

const MyShortcut = styled.div`
	min-width: 130px;
	min-height: 130px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 1px ${({theme}) => theme.colors.borderDefault} solid;
	margin: 20px;
`

const LinkImg = styled.img`
	width: 32px;
	height: 32px;
`

const LinkName = styled.div`
	color: gray;
`

export default function Shortcut(){
	const tempShortcut = [
		{
			id: 1,
			name: "Google",
			url: "https://www.google.com",
		},
		{
			id: 2,
			name: "youtube",
			url: "https://www.youtube.com",
		},
		{
			id: 3,
			name: "naver",
			url: "https://www.naver.com",
		}
	]
	
	return (
		<ShortcutWrapper>
			{tempShortcut.map((link) => {
				return (
					<MyShortcut key={link.id}>
						<LinkImg type="image/png" src={`${link.url}/favicon.ico`} />
						<LinkName>{link.name}</LinkName>
					</MyShortcut>
				)
			})}
		</ShortcutWrapper>
	)
}