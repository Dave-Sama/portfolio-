import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';
export default function Profile() {
	return (
		<div className='profile-container'>
			<div className='profile-parent'>
				<div className='profile-detailes'>
					<div className='colz'>
						<div className='colz-icon'>
							<a
								href='https://www.facebook.com/dave.haron.102'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-facebook-square'></i>
							</a>

							<a
								href='https://www.instagram.com/_dave_u/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-instagram'></i>
							</a>
							<a
								href='https://www.youtube.com/channel/UCfoOPBUIUWRLvAzGbVj1pYA'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-youtube'></i>
							</a>
							<a
								href='https://twitter.com/DaveHz1228'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-twitter'></i>
							</a>
						</div>
					</div>

					<div className='profile-details-name'>
						<span className='primary-text'>
							Hello, I'm <span className='highlighted-text'>David</span>
						</span>
					</div>
					<div className='profile-details-role'>
						<span className='primary-text'>
							<h1>
								<Typical
									loop={Infinity}
									steps={[
										'Ethusiastic Dev 😎',
										1000,
										'Full Stack Developer 💻',
										1000,
										'MERN Stack Dev 😍',
										1000,
										'Cross Platform 🌎',
										1000,
										'React/React-Native Dev 📲',
										1000,
									]}
								/>
							</h1>
							<span className='profile-role-tagline'>
								Knack of building applications with frontend backend operations.
							</span>
						</span>
						<div className='profile-options'>
							<button
								className='btn primary-btn'
								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
							>
								Hire Me
							</button>
							<a
								href='David Charon-Zade Resume.pdf'
								download='David Charon-Zade Resume.pdf'
								className=''
							>
								<button className='btn highlighted-btn'>Get Resume</button>
							</a>
						</div>
					</div>
				</div>
				<div className='profile-picture'>
					<div className='profile-picture-background'></div>
				</div>
			</div>
		</div>
	);
}

