import { NavbarContainer, NavbarLinks } from '../styles/Navbar.styles';

import navBarItems from '../data/navBarData';
// import Dropdown from './Dropdown';
import { MenuItem } from './MenuItem';

export const Navbar = () => {
	return (
		<NavbarContainer>
			<p>Logo</p>

			<NavbarLinks>
				{navBarItems.map((item) => {
					return <MenuItem key={item.label} item={item} />;
				})}
			</NavbarLinks>
		</NavbarContainer>
	);
};
