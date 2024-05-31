import { StyledLink } from '../styles/Navbar.styles';
import Dropdown from './Dropdown';

export const MenuItem = ({ items }) => {
	{
		<p>MenuItem</p>;
		items.map((item) => {
			return (
				<div key={item.label}>
					<StyledLink to={item.url}>{item.label}</StyledLink>

					{items.subMenu && <Dropdown subMenu={item.subMenu} />}
				</div>
			);
		});
	}
};
