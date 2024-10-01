import styled from 'styled-components';
import 	{NavbarLinksSubMenu} from './Navbar.styles'

export const DropDownContainer = styled.div`
	background: wheat;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* cursor: pointer; */
	opacity: ${props => props.$isOpen ? '100%' : 0};

	position: absolute;
	top: 44px;
	left: 0;
	right: 0;
`;

export const DropdownToggle = styled.button`
    cursor: pointer;
	

`
export const DropdownLinksSubMenu = styled(NavbarLinksSubMenu)`
    display: block;

`