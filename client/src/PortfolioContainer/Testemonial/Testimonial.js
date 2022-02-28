import './Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import React from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import lady from '../../img/Testimonial/lady.png';
import man from '../../img/Testimonial/man.png';
import mike from '../../img/Testimonial/mike.png';

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
											Iv'e worked with Dave before, he's talanted, fast and
											honest.
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
										<img src={lady} alt='no internet connection' />
										<h5>Daisy Dominic</h5>
										<p>CEO Inansglobal</p>
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='testi-item'>
									<div className='testi-comment'>
										<p>
											<i className='fa fa-quote-left' />
											Fell in love with his delivery, very fast and with high
											quality.
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
										<img src={man} alt='no internet connection' />
										<h5>Joe Doe</h5>
										<p>CEO at freshfuck.com</p>
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='testi-item'>
									<div className='testi-comment'>
										<p className='quote'>
											<i className='fa fa-quote-left' />
											It's obvious that he know what he's doing.
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
										<img src={mike} alt='no internet connection' />
										<h5>Mike Jones</h5>
										<p>CEO at blacklivesmetter.com</p>
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
