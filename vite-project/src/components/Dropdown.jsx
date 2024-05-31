import {
	DropDownContainer,
	NavbarLinksSubMenu,
	StyledLink,
} from '../styles/Navbar.styles';

export default function Dropdown({ subMenu }) {
	return (
		<DropDownContainer>
			<NavbarLinksSubMenu>
				{subMenu.map((item) => {
					return (
						<div key={item.label}>
							<StyledLink to={item.url}>{item.label} </StyledLink>
						</div>
					);
				})}
			</NavbarLinksSubMenu>
		</DropDownContainer>
	);
}
