import React, { useEffect } from 'react';
import './AboutMe.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
// import { SCREEN_CONSTANTS } from '../../utilities/commonUtils';

export default function AboutMe({ id }) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen != id) {
			return;
		}
		Animations.animations.fadeInScreen(id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTANTS = {
		description:
			'Full Stack web and mobile developer with background knowledge of MERN stack with react.js. ',
		highlights: {
			bullets: [
				'Full Stack web and mobile development',
				'Interactive Front End as per the the design',
				'React.js and React-Native',
				'Redux-Toolkit for State Management',
				'Building REST API',
				'Managing databases',
			],
			heading: 'Here are a Few Highlights:',
		},
	};

	const renderHighlight = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className='highlight' key={i}>
				<div className='highlight-blob'></div>
				<div>
					<span>{value}</span>
				</div>
			</div>
		));
	};
	return (
		<div className='about-me-container screen-container fade-in' id={id || ''}>
			<div className='about-me-parent'>
				<ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
				<div className='about-me-card'>
					<div className='about-me-profile'></div>
					<div className='about-me-details'>
						<span className='about-me-description'>
							{SCREEN_CONSTANTS.description}
						</span>
						<div className='about-me-highlight'>
							<div className='highlight-heading'>
								<span>{SCREEN_CONSTANTS.highlights.heading}</span>
							</div>

							{renderHighlight()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
