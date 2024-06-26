import { StyledLink } from '../styles/Navbar.styles';
import Dropdown from './Dropdown';

export const MenuItem = ({ item }) => {
	console.log('item', item);
	// {
	// <p>menuitem</p>;
	// item.map((item) => {
	// return (
	return (
		<div key={item.label}>
			{item.subMenu ? (
				<Dropdown subMenu={item.subMenu} />
			) : (
				<StyledLink to={item.url}>{item.label}</StyledLink>
			)}
		</div>
	);
	// 	);
	// });
	// }
};
