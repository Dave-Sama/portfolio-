// import React from 'react';
// import Footer from './Footer/Footer';
// import Profile from './Profile/Profile';
// import Header from './Header/Header';
// import './Home.css';
// export default function Home() {
// 	return (
// 		<div className='home-container'>
// 			<Header />
// 			<Profile />
// 			<Footer />
// 		</div>
// 	);
// }

import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

export default function Home(props) {
	return (
		<div className='home-container' id={props.id || ''}>
			<Header />
			<Profile />
			<Footer />
		</div>
	);
}
