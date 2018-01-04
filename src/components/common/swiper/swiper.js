import React, {
	Component
} from 'react';
import './swiper.css';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

class RSwiper extends Component {
	componentDidMount() {
		new Swiper('.BCindex_container', {
			pagination: '.BCindex_page',
			// loop: true,
			autoplay: 3000,
			observer: true,
			observeParents: true
		});
	}

	render() {
		return (
			<section className="swiper-list">
		    <section className="swiper-container BCindex_container">
		      <section className="swiper-wrapper">
		        <section className="swiper-slide">
		          <a><img src={require('./../../../assets/landingPage/landingPage.jpg')} alt="轮播图图片" /></a>
		        </section>
		      </section>
		      <section className="swiper-pagination BCindex_page"></section>
		    </section>
		  </section>
		)
	}


}

export default RSwiper;