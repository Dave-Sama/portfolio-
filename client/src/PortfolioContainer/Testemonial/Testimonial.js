import './Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import React from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import Yonathan from '../../img/Testimonial/Yonathan.png';
import Ariel from '../../img/Testimonial/Ariel.png';
import Sage from '../../img/Testimonial/Sage.png';

export default function Testimonial({ id }) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen != id) {
			return;
		}
		Animations.animations.fadeInScreen(id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const options = {
		loop: true,
		margin: 0,
		nav: true,
		animation: 'bounceInRight',
		animateOut: 'bounceAtRight',
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			1000: {
				items: 3,
			},
		},
	};
	return (
		<div>
			<ScreenHeading
				title={'Testimonial'}
				subHeading={'What My Clients Say About Me'}
			/>
			<section className='testimonial-section fade-in' id={id}>
				<div className='container'>
					<div className='row'>
						<OwlCarousel
							className='owl-carousel'
							id='testimonial-carousel'
							{...options}
						>
							<div className='col-lg-12'>
								<div className='testi-item'>
									<div className='testi-comment'>
										<p>
											<i className='fa fa-quote-left' />
											I've worked with Dave before, he's talented developer that
											will always give his best for the cause.
											<i className='fa fa-quote-right' />
										</p>
										<ul className='stars list-unstyled'>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star-half-alt' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
										</ul>
									</div>
									<div className='client-info'>
										<img src={Yonathan} alt='no internet connection' />
										<h5>Yonathan Hen</h5>
										<p>Fullstack Developer</p>
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='testi-item'>
									<div className='testi-comment'>
										<p>
											<i className='fa fa-quote-left' />
											I know him for a few years, He's the man you want to get
											yourr job done.
											<i className='fa fa-quote-right' />
										</p>
										<ul className='stars list-unstyled'>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star-half-alt' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
										</ul>
									</div>
									<div className='client-info'>
										<img src={Ariel} alt='no internet connection' />
										<h5>Ariel Turchinsky</h5>
										<p>Unity Developer</p>
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='testi-item'>
									<div className='testi-comment'>
										<p className='quote'>
											<i className='fa fa-quote-left' />
											Worked with David for a few years, He's devoted, fast and
											will never compromise on quality.
											<i className='fa fa-quote-right' />
										</p>
										<ul className='stars list-unstyled'>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
											<li>
												<i className='fa fa-star-half-alt' />
											</li>
											<li>
												<i className='fa fa-star' />
											</li>
										</ul>
									</div>
									<div className='client-info'>
										<img src={Sage} alt='no internet connection' />
										<h5>Sage Baram</h5>
										<p>Data Scientist</p>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</section>
		</div>
	);
}
