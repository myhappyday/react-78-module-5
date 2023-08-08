import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: blueviolet;
  }
`;

export const App = () => {
  return (
    <div>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dogs">Collection</NavLink>
      </nav> */}
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/dogs">Collection</StyledLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/dogs/:dogId" element={<div>Element of collection</div>} />
      </Routes>
    </div>
  );
};
