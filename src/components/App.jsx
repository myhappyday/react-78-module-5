import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Статичний імпорт
// import Home from 'pages/Home';
// import Dogs from 'pages/Dogs';
// import DogDetails from 'pages/DogDetails';
import { Layout } from './Layout';
// import { Gallery } from './Gallery';
// import { SubBreeds } from './SubBreeds';

// Динамічний іморт
const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogDetails = lazy(() => import('../pages/DogDetails'));
// Спосіб обійти іменований імпорт для lazy
const Gallery = lazy(() =>
  import('./Gallery').then(module => ({
    ...module,
    default: module.Gallery,
  }))
);
const SubBreeds = lazy(() =>
  import('./SubBreeds').then(module => ({
    ...module,
    default: module.SubBreeds,
  }))
);

// const Gallery = lazy(() => import('./Gallery').then(module => {
//   console.log(module);
//   // return module;
//   return {...module,
//     default: module.Gallery,
//   }
// })
// );

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
