import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg'

const Hero = () => {
    return (
			<section className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
				<div className='flex-1 flex items-center justify-center h-full'>
					<img
						src={hero}
						alt=''
						className='w-[600px] rounded-full h-full mt-10'
					/>
				</div>
				<div className='flex-1'>
					<div className='md:text-left text-center'>
						<h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
							<span className='text-cyan-600 md:text-6xl text-5xl'>
								Hello !
								<br />
							</span>
							I am <span>Jamal Hossen</span>
						</h1>
						<h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
							Front-End Developer
						</h4>
						<button className='bg-cyan-600 font-semibold text-white md: mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-6'>
							Contact Me
						</button>

						<div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
							<Link
								to='https://www.instagram.com/kamruzzaman.joy.63/'
								target='_blank'
							>
								<FaInstagram></FaInstagram>
							</Link>
							<Link
								to='https://www.facebook.com/kamruzzaman.joy.63/'
								target='_blank'
							>
								<FaFacebook></FaFacebook>
							</Link>
							<Link
								to='https://www.linkedin.com/in/md-jamal-hossen-583989220/'
								target='_blank'
							>
								<FaLinkedin />
							</Link>
						</div>
					</div>
				</div>
			</section>
		);
};

export default Hero;