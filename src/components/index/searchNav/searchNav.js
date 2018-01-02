import React, {
	Component
} from 'react';
import './searchNav.css';

class SearchNav extends Component {
	render() {
		return (
			<div className="searchNav">
			    <section className="roll searchStyle">
			      <section className="left">
					<img src={require('./../../../assets/index/6.png')} />
			        <p>已登录</p>
			      </section>
			      <input type="text" name="search" placeholder="  搜索" />
			      <section className="right">
					<img src={require('./../../../assets/index/26.png')} />
			        <p>消息</p>
			      </section>
			    </section>
			</div>
		)
	}
};

export default SearchNav;