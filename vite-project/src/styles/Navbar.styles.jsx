import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 0 1rem;
	/* height: 80px; */
	background-color: #f2f2f2;
`;

export const NavbarLinks = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	list-style: none;
	position: relative;
`;

export const NavbarLinksSubMenu = styled(NavbarLinks)`
	flex-direction: column;
`;

export const StyledLink = styled(Link)`
	margin: 0 1rem;
`;

export const DropDownContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 20px;
	left: 0;
	right: 20px;
`;
