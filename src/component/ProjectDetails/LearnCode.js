import React from 'react';
import leanrCode from '../../assets/project-image/LearnCoding.PNG'
import leanrCode1 from '../../assets/project-image/LearnCoding.1.PNG'
import leanrCode2 from '../../assets/project-image/LearnCoding (2).PNG'

const LearnCode = () => {
    const projects = {
			id: 1,
			name: 'Learn',
			github_client_link:
				'https://github.com/kamruzzaman22874/My-Learn-Coding-Repo',
			github_server_link:
				'https://github.com/kamruzzaman22874/Learn-Coding-Repo',
			live_link: 'https://assignment10-authenticat-1b32f.web.app/',
			details: [
				{
					title: 'Learn Code',
					text1: 'This website build for the learning purpose.',
					text2:'Learner choose the any learning part by programming language.',
					text3:'This website is fully responsive and loads quick fully authorized.',
					text4: 'The Learn Coding teach students about Programming Language.',
					text5: 'This website deploy the server site by the vercel.',
				},
			],
		};
    return (
			<section className='grid grid-cols-1 lg:grid-cols-3'>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<figure>
						<img src={leanrCode1} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text3} </p>
						<p>4. {projects.details[0].text4} </p>
						<p>5. {projects.details[0].text5} </p>
					</div>
				</div>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<figure>
						<img src={leanrCode} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text3} </p>
						<p>4. {projects.details[0].text4} </p>
						<p>5. {projects.details[0].text5} </p>
					</div>
				</div>
				<div className='card w-96 bg-base-500 shadow-xl mb-4'>
					<figure>
						<img src={leanrCode2} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							Project Name : {projects.details[0].title}
						</h2>
						<p>Project Details: </p> <br />
						<p>1. {projects.details[0].text1} </p>
						<p>2. {projects.details[0].text2} </p>
						<p>3. {projects.details[0].text3} </p>
						<p>4. {projects.details[0].text4} </p>
						<p>5. {projects.details[0].text5} </p>
					</div>
				</div>
			</section>
		);
};

export default LearnCode;