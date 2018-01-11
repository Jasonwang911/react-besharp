import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom';
import './footer.css';

class RFooter extends Component {
	render() {
		return (
			<section className="footer">
			    <section className="index">
			      <Link to="/" >
			        <i></i>
			        <p>首页</p>
			      </Link>
			    </section>
			    <section className="banklist">
			      <Link to="/rankList" >
			        <i></i>
			        <p>排行榜</p>
			      </Link>
			    </section>
			    <section className="profit">
			      <Link to="/profit" >
			        <i></i>
			        <p>比收益</p>
			      </Link>
			    </section>
			    <section className="club">
			      <Link to="/investment" >
			        <i></i>
			        <p>投资</p>
			      </Link>
			    </section>
			    <section className="mine">
			      <Link to="/mine" >
			        <i></i>
			        <p>我</p>
			      </Link>
			    </section>
			  </section>
		)
	}
}

export default RFooter;