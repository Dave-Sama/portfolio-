import React, { useEffect } from 'react';
import './AboutMe.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

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
			'Full Stack web and mobile developer with background knowledge of MERN stacks with react.js',
		highlights: {
			bullets: [
				'Full Stack web and mobile development',
				'Interactive Front End as per the design',
				'React and React-Native',
				'Redux for State Management',
				'Building REST API',
				'Managing databases',
			],
			heading: 'Here are a few Highlights:',
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
						<div className='about-me-options'>
							<button
								className='btn primary-btn'
								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
							>
								Hire Me
							</button>
							<a
								href='David Charon-Zade Resume.pdf'
								download='David Charon-Zade Resume.pdf'
							>
								<button className='btn highlighted-btn'>Get Resume</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// import React, { useEffect } from 'react';
// import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
// import ScrollService from '../../utilities/ScrollService';
// import Animations from '../../utilities/Animations';
// import './AboutMe.css';

// export default function AboutMe(props) {
// 	let fadeInScreenHandler = (screen) => {
// 		if (screen.fadeInScreen !== props.id) return;
// 		Animations.animations.fadeInScreen(props.id);
// 	};
// 	const fadeInSubscription =
// 		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

// 	const SCREEN_CONSTSANTS = {
// 		description:
// 			'E&P Data Specialist with Physics and Geophysics background. Have a small business in duck and sheep. An enthusiast for new technology and development. ',
// 		highlights: {
// 			bullets: [
// 				'Building ETL Solutions',
// 				'SQL & No-SQL Database Development',
// 				'G&G Technical Applications',
// 				'GIS Web Development and Analysis',
// 				'Machine Learning Project in Drilling and Production',
// 				'Building REST-API with Python and Node.Js',
// 			],
// 			heading: 'Here are a Few Highlights:',
// 		},
// 	};
// 	const renderHighlight = () => {
// 		return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
// 			<div className='highlight ' key={i}>
// 				<div className='highlight-blob '></div>
// 				<span>{value}</span>
// 			</div>
// 		));
// 	};

// 	return (
// 		<div
// 			className='about-me-container screen-container fade-in '
// 			id={props.id || ''}
// 		>
// 			<div className='about-me-parent '>
// 				<ScreenHeading
// 					title={'About Me'}
// 					subHeading={'My Portfolio Overview'}
// 				/>
// 				<div className='about-me-card '>
// 					<div className='about-me-profile '></div>
// 					<div className='about-me-details '>
// 						<span className='about-me-description '>
// 							{SCREEN_CONSTSANTS.description}
// 						</span>
// 						<div className='about-me-highlights '>
// 							<div className='highlight-heading '>
// 								<span>{SCREEN_CONSTSANTS.highlights.heading}</span>
// 							</div>
// 							{renderHighlight()}
// 						</div>
// 						<div className='about-me-options '>
// 							<button
// 								className='btn primary-btn'
// 								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
// 							>
// 								{' '}
// 								Let's Discuss!{' '}
// 							</button>
// 							<a href='My_CV_2_0.pdf' download='My Portfolio.pdf'>
// 								<button className='btn highlighted-btn '>Get Portfolio</button>
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

