import styled from 'styled-components';

const ShortcutWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: 100%;
`

const MyShortcut = styled.div`
	width: 150px;
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
			name: "solved.ac",
			url: "https://www.solved.ac",
		}
	]
	
	return (
		<ShortcutWrapper>
			{tempShortcut.map((link) => {
				return (
					<MyShortcut key={link.id}>
						<link rel="icon" type="image/png" href={`${link.url}/favicon.ico`} />
						<LinkName>{link.name}</LinkName>
					</MyShortcut>
				)
			})}
		</ShortcutWrapper>
	)
}