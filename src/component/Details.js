import React from 'react';

const Details = () => {
    	const projects = 
				{
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
						},
            ],
                    
                    
    }
    console.log(projects);
    return (
			<div className='card w-96 bg-base-500 shadow-xl'>
				<figure>
					<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>
						Project Name : {projects.details[0].title}
						<div className='badge badge-secondary'>NEW</div>
					</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<div className='badge badge-outline'>Fashion</div>
						<div className='badge badge-outline'>Products</div>
					</div>
				</div>
			</div>
		);
};

export default Details;