import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../component/About';
import Blog from '../component/Blog';
import Details from '../component/Details';
import Hero from '../component/Hero';
import Hireme from '../component/Hireme';
import Home from '../component/Home';
import Project from '../component/Project';
import CarSell from '../component/ProjectDetails/CarSell';
import LearnCode from '../component/ProjectDetails/LearnCode';
import SpaService from '../component/ProjectDetails/SpaService';
import Skills from '../component/Skills';
import Main from './Main/Main';

const Routes = () => {
    const router = createBrowserRouter([
			{
				path: '/',
				element: <Main></Main>,
				children: [
					{
						path: '/',
						element: <Home></Home>,
					},
					{
						path: '/home',
						element: <Home></Home>,
					},
					{
						path: '/hero',
						element: <Hero></Hero>,
					},

					{
						path: '/about',
						element: <About></About>,
					},
					{
						path: '/skills',
						element: <Skills></Skills>,
					},
					{
						path: '/project',
						element: <Project></Project>,
					},
					{
						path: '/blog',
						element: <Blog></Blog>,
					},
					{
						path: '/details',
						element: <Details></Details>,
					},
					{
						path: '/detailsOne',
						element: <CarSell></CarSell>,
					},
					{
						path: '/detailsTwo',
						element: <SpaService></SpaService>,
					},
					{
						path: '/detailsThree',
						element: <LearnCode></LearnCode>,
					},
					{
						path: '/hireme',
						element: <Hireme></Hireme>,
					},
				],
			},
		]);
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Routes;