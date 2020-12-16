import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStyles = styled.ul`
	display: flex;
	list-style: none;
    gap: 20px;
    padding:0;
    justify-content: space-between;
	a {
        text-decoration: none;
        font-size: 36px;
        line-height: 44px;
        color: #272343;
    }
    a:focus {
        font-weight: bold;
    }
	a:hover {
		color: yellow;
	}
`;

export default function Menu() {
	return (
		<MenuStyles>
			<Link to="/">
				<li>🔥 Popular Songs</li>
			</Link>
			<Link to="/styles">
				<li>💗 Styles</li>
			</Link>
			<Link to="/add">
				<li>🌚 Add</li>
			</Link>
			<Link to="/cart">
				<li>🛒 Cart</li>
			</Link>
		</MenuStyles>
	);
}
