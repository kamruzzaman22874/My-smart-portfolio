import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/Jamal-Hossen.pdf'

const Navbar = () => {

    return (
			<div className='navbar'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-500 rounded-box w-52'
						>
							<li>
								<Link to='/home'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/skills'>Skill</Link>
							</li>
							<li>
								<Link to='/project'>Project</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
							<li>
								<Link to='/details'>Details</Link>
							</li>
							<li>
								<Link to='/hireme'>Hireme</Link>
							</li>
						</ul>
					</div>
					<div>
						<Link className='text-white text-3xl font-semibold' to='/'>
							PORT<span className='text-cyan-600'>FO</span>LIO
						</Link>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 text-2xl font-semibold text-white'>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/skills'>Skill</Link>
						</li>
						<li>
							<Link to='/project'>Project</Link>
						</li>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					<a href={resume} className='btn' download>
						<button className='text-lg'>resume</button>
					</a>
				</div>
			</div>
		);
};

export default Navbar;