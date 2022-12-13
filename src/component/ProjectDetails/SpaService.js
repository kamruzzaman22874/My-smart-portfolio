import React from 'react';
import spa from '../../assets/project-image/spaService.jpeg'
import spa1 from '../../assets/project-image/spaService1.jpeg'
import spa2 from '../../assets/project-image/spaService2.jpeg'

const SpaService = () => {
    const projects = {
			name: 'Spa-Service',
			github_client_link:
				'https://github.com/kamruzzaman22874/My-Spa-Service-Repo',
			github_server_link:
				'https://github.com/kamruzzaman22874/Spa-Service-Server-Repo',
			live_link: 'https://assignment11-spa.web.app/',
			details: [
				{
					title: 'Spa-Service',
					text1: 'This website is for Spa service evaluation.',
					text2: 'The customer can choice any option and take this service.',
					text3: 'This website is fully responsive and loads quick fully authorized.',
					text4: 'This Service are get male/female both.',
					text5: 'Used to the React , firebase, node.js , express and also mongoDb',
				},
			],
		};
    return (
			<section className='grid grid-cols-1 lg:grid-cols-3'>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<figure>
						<img src={spa} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text2} </p>
						<p>4. {projects.details[0].text2} </p>
						<p>5. {projects.details[0].text2} </p>
					</div>
				</div>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<figure>
						<img src={spa2} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text2} </p>
						<p>4. {projects.details[0].text2} </p>
						<p>5. {projects.details[0].text2} </p>
					</div>
				</div>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<figure>
						<img src={spa1} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text2} </p>
						<p>4. {projects.details[0].text2} </p>
						<p>5. {projects.details[0].text2} </p>
					</div>
				</div>
			</section>
		);
};

export default SpaService;