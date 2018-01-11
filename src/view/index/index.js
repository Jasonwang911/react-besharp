import React, {
	Component
} from 'react';
import SearchNav from '@/components/index/searchNav/searchNav';
// import RSwiper from '@/components/common/swiper/swiper';
import './index.css';
import api from '@/api/api';

class Index extends Component {
	render() {
		return (
			<div className="index">
				<SearchNav />
				{/*<RSwiper /> */}
				{/* 公告栏 */}
				<section className="banav">
			      <img src={require('@/assets/index/10.png')} alt="this is a log" />
			      <marquee direction="left" behavior="scroll" loop="-1" scrollamount="3" scrolldelay="10" align="middle" bgcolor="#ffffff" height="30" width="80%" hspace="0" vspace="10">我是公告啦啦啦啦啦啦啦啦啦啦啦啦啦</marquee>
			    </section>
				{/* 中部菜单栏 */}
				<section className="menu">
			      <section className="mTop clearfix">
			        <section>
			          <img src="" alt="菜单图标" />
			          <p>菜单图标</p>
			        </section>
			      </section>
			    </section>
			</div>
		)
	}

	componentDidMount() {
		api.commonPost('/finsuitPhone/deal', 'param_key={"head":{"TYPE":"GET_BANNER_ADV_LIST","SESSION_ID":"' + this.sessionId + '","TOKEN":"' + this.token + '","DEVICE_ID":""},"param":{"BANNER_SEAT":"1"}}')
			.then(res => {
				console.log(res);
			})
	}
}

export default Index;