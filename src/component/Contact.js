import React from 'react';
// import { emailjs } from 'emailjs.com';
// import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
	
	return (
		<section className='py-10 px-3 text-black'>
			<div className='text-center mt-8'>
				<h3 className='text-4xl font-semibold'>
					Contact <span className='text-cyan-600'>Me</span>
				</h3>
				<p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
				<div className='mt-16 flex md:flex-row flex-col text-white gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
					<form
						action='https://formspree.io/f/xdojqvnd'
						method='POST'
						className='flex flex-col flex-1 gap-5 '
					>
						<input
							className='bg-gray-700 outline-0 rounded px-2  py-4'
							type='text'
							name='name'
							placeholder='Your name'
						/>
						<input
							className='bg-gray-700 outline-0 rounded px-2  py-4'
							type='email'
							placeholder='Your email'
						/>
						<textarea
							className='bg-gray-700 outline-0 rounded px-2'
							name='message'
							placeholder='Your message'
							rows={10}
						></textarea>
						<button className='btn-primary bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-6 w-fit'>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
