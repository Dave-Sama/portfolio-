import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume({ id }) {
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen != id) {
			return;
		}
		Animations.animations.fadeInScreen(id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const ResumeHeading = (props) => {
		return (
			<div className='resume-heading'>
				<div className='resume-main-heading'>
					<div className='heading-bullet'></div>

					<span>{props.heading ? props.heading : ''}</span>

					{props.fromDate && props.toDate ? (
						<div className='heading-date'>
							{props.fromDate + '-' + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className='resume-sub-heading'>
					<span>{props.subHeading ? props.subHeading : ''}</span>
				</div>
				<div className='resume-heading-description'>
					<span>{props.description ? props.description : ''}</span>
				</div>
			</div>
		);
	};

	const resumeBullets = [
		{ label: 'Education', logoSrc: 'education.svg' },
		{ label: 'Work History', logoSrc: 'work-history.svg' },
		{ label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
		{ label: 'Projects', logoSrc: 'projects.svg' },
		{ label: 'Interests', logoSrc: 'interests.svg' },
	];

	const programmingSkillsDetails = [
		{ skill: 'JavaScripts', ratingPrecentage: 85 },
		{ skill: 'React.js', ratingPrecentage: 85 },
		{ skill: 'React-Native', ratingPrecentage: 70 },
		{ skill: 'Express.js', ratingPrecentage: 89 },
		{ skill: 'Node.js', ratingPrecentage: 89 },
		{ skill: 'MongoDB', ratingPrecentage: 80 },
		{ skill: 'HTML', ratingPrecentage: 80 },
		{ skill: 'CSS', ratingPrecentage: 80 },
	];

	const projectDetails = [
		{
			title: 'Personal Portfolio Website',
			duration: { from: 2022, to: 2022 },
			description:
				'A Personal Portfolio website to showcase all my details and projects at one place.',
			subHeading: 'Technologies Used: React.js Bootstrap, Node.js',
		},
		{
			title: 'Mobile E-Commerce Amazone style shop',
			duration: { from: 2021, to: 2021 },
			description:
				'An E-Commerce application designed to sell products online with payment system integration.',
			subHeading: 'Technologies Used: React-Native, AWS-Amplify',
		},
		{
			title: 'An E-Commerce website based on Booking',
			duration: { from: 2021, to: 2021 },
			description:
				'An E-Commerce website designed to sell traveling packages around the world.',
			subHeading: 'Technologies Used: React.js, Node.js, MongoDB',
		},
	];

	const resumeDetails = [
		<div className='resume-screen-container' key='education'>
			<ResumeHeading
				heading={'Sami Shamoon College of Engineering (SCE)'}
				subHeading={'BECHLOR OF SCIENCE, Artificial Intelligence'}
				fromDate={'2018'}
				toDate={'2022'}
			/>
			<ResumeHeading
				heading={'Yud Gimel-Yud Dalet at Ort Yami - Ashdod'}
				subHeading={'Electronics Practical Engineer'}
				fromDate={'2010'}
				toDate={'2012'}
			/>
			<ResumeHeading
				heading={'Ashdod Sea Officers Youth Village - Ort Yami.'}
				subHeading={'High School'}
				fromDate={'2006'}
				toDate={'2009'}
			/>
		</div>,
		<div className='resume-screen-container' key='work-experience'>
			<ResumeHeading
				heading={'Currectry working as MERN stack web and mobile developer'}
				subHeading={'Mainly using React.js with Node.js'}
				fromDate={'2022'}
				toDate={'2022'}
			/>
			<ResumeHeading
				heading={'Ness-Technologies'}
				subHeading={'Technical Support Engineer'}
				fromDate={'2021'}
				toDate={'2022'}
			/>
			<ResumeHeading
				heading={'Developed an E-Commerce website and mobile app'}
				subHeading={
					'Integrated the web app with backend services to create new user onboarding application with dynamic form content.'
				}
				fromDate={'2021'}
				toDate={'2021'}
			/>
			
		</div>,
		<div
			className='resume-screen-container programming-skills-container'
			key='programming-skills'
		>
			{programmingSkillsDetails.map((skill, index) => (
				<div className='skill-parent' key={index}>
					<div className='heading-bullet'></div>
					<span>{skill.skill}</span>
					<div className='skill-precentage'>
						<div
							style={{ width: skill.ratingPrecentage + '%' }}
							className='active-precentage'
						></div>
					</div>
				</div>
			))}
		</div>,
		<div className='projects resume-screen-container' key='projects'>
			{projectDetails.map((projectDetail, index) => (
				<ResumeHeading
					key={index}
					heading={projectDetail.title}
					subHeading={projectDetail.subHeading}
					description={projectDetail.description}
					fromDate={projectDetail.duration.from}
					toDate={projectDetail.duration.to}
				/>
			))}
		</div>,
		<div className='resume-screen-container' key='interests'>
			<ResumeHeading
				heading='Teaching'
				description='Apart from being a tech enthusiast and a code writer, I also love to teach people what i know simply because i believe in sharing.'
			/>
			<ResumeHeading
				heading='Music'
				description='Listening to Lofi and chill music while I work, eat or working out is something I absolutely enjoy doing.'
			/>
			<ResumeHeading
				heading='Working out'
				description='I believe that our body is our temple, treat it with respect and love.'
			/>
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHight = 360;
		let newCarousalOffset = {
			style: {
				transform: 'translateY(' + index * offsetHight * -1 + 'px)',
			},
		};
		setCarousalOffSetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
				}
				key={index}
			>
				<img
					className='bullet-logo'
					src={require(`../../assets/Resume/${bullet.logoSrc}`)}
					alt='oops.. no internet connection'
				/>
				<span className='bullet-label'>{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreen = () => {
		return (
			<div
				style={carousalOffSetStyle.style}
				className='resume-details-carousal'
			>
				{resumeDetails.map((resumeDetail) => resumeDetail)}
			</div>
		);
	};

	return (
		<div className='resume-container screen-container fade-in' id={id || ''}>
			<div className='resume-content'>
				<ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
				<div className='resume-card'>
					<div className='resume-bullets'>
						<div className='bullet-container'>
							<div className='bullet-icons'></div>
							<div className='bullets'>{getBullets()}</div>
						</div>
					</div>
					<div className='resume-bullets-details'>{getResumeScreen()}</div>
				</div>
			</div>
		</div>
	);
}
