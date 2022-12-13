import React from 'react';
import carsell1 from '../../assets/project-image/car-sell1.jpeg'
import carsell2 from '../../assets/project-image/car-sell2.jpeg'
import carsell from '../../assets/project-image/carSell.jpeg'


const CarSell = () => {
    const projects = {
			id: 1,
			name: 'Car Sell',
			github_client_link:
				'https://github.com/kamruzzaman22874/My-Old-Car-Sell-Repo',
			github_server_link:
				'https://github.com/kamruzzaman22874/Sell-Car-Server-Repo',
			live_link: 'https://old-car-390a9.web.app/',
			details: [
				{
					title: 'CAR-SELL',
					text1: 'This website is for Car Sell service evaluation.',
					text2: 'The customer can choice any car and buy.',
					text3:'This website is fully responsive and loads quick fully authorized.',
					text4: 'npm i react-router-dom.',
					text5: 'npm install react-hook-form',
				},
			],
		};
    return (
			<section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<div className=''>
						<figure>
							<img src={carsell1} alt='img' />
						</figure>
					</div>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text2} </p>
						<p>4. {projects.details[0].text4} </p>
						<p>5. {projects.details[0].text5} </p>
					</div>
				</div>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<div className=''>
						<figure>
							<img src={carsell2} alt='img' />
						</figure>
					</div>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text2} </p>
						<p>4. {projects.details[0].text4} </p>
						<p>5. {projects.details[0].text5} </p>
					</div>
				</div>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<div className=''>
						<figure>
							<img src={carsell} alt='img' />
						</figure>
					</div>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
					<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text2} </p>
						<p>4. {projects.details[0].text4} </p>
						<p>5. {projects.details[0].text5} </p>
					</div>
				</div>
			</section>
		);
};

export default CarSell;