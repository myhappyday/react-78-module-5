import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: #1eaea7;
  }
`;

// localhost:3000/
//localhost:3000/dogs
//localhost:3000/dogs/dog-5

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Collection</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};
