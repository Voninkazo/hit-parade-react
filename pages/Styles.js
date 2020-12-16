import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {Context} from '../Context';

const StylesContainer = styled.ul`
	display: grid;
  gap: 20px;
  padding:0;
  list-style: none;
	a {
		text-decoration: none;
		color: #272343;
    font-size: 64px;
    line-height: 78px;
    color: #000000;
	}
	a:hover {
		color: #ffd803;
  }
  li {
    margin-top : 54px;
  }
`;

function Styles() {
    const {styles} = useContext(Context);

  return (
      <StylesContainer>
        {styles.map(style => (
              <Link to={`/styles/${style}`} key={style}>
                <li>🎧 {style}</li>
              </Link>
            ))}
      </StylesContainer>
  )
}

export default Styles
