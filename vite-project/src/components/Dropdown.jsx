import { useState } from 'react';

import {
	StyledLink,
} from '../styles/Navbar.styles';

import { DropDownContainer, DropdownToggle, DropdownLinksSubMenu } from "../styles/Dropdown.styles";

export default function Dropdown({ item }) {
	console.log('item', item)
	const {subMenu} = item
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const handleOnClick = () => { 
		const isOpen = !isDropdownOpen
		setIsDropdownOpen(isOpen) 
	}

	return (
			<>
				<DropdownToggle onClick={handleOnClick}> {item.label} </DropdownToggle>	
						<DropDownContainer $isOpen={isDropdownOpen} >
							<DropdownLinksSubMenu>
								{subMenu.map((item) => {
									return (
										<div key={item.label}>
											<StyledLink to={item.url}>{item.label} </StyledLink>
										</div>
									);
								})}
							</DropdownLinksSubMenu>
						</DropDownContainer>
			</>
	);
}
