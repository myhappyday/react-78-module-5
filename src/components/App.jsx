import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Dogs from "pages/Dogs";
import DogDetails from "pages/DogDetails";
import { Layout } from "./Layout";
import { Gallery } from "./Gallery";
import { SubBreeds } from "./SubBreeds";

// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: blueviolet;
//   }
// `;

export const App = () => {
  return (
    <div>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dogs">Collection</NavLink>
      </nav> */}
      {/* <ul>
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
      </Routes> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<SubBreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
