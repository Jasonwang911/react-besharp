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
			      <a>
			      <Link to="/" >
			        <i></i>
			        <p>首页</p>
			      </Link>
			      </a>
			    </section>
			    <section className="banklist">
			      <a>
			      <Link to="/rankList" >
			        <i></i>
			        <p>排行榜</p>
			      </Link>
			      </a>
			    </section>
			    <section className="profit">
			      <a>
			      <Link to="/profit" >
			        <i></i>
			        <p>比收益</p>
			      </Link>
			      </a>
			    </section>
			    <section className="club">
			      <a>
			      <Link to="/investment" >
			        <i></i>
			        <p>投资</p>
			      </Link>
			      </a>
			    </section>
			    <section className="mine">
			      <a>
			      <Link to="/mine" >
			        <i></i>
			        <p>我</p>
			      </Link>
			      </a>
			    </section>
			  </section>
		)
	}
}

export default RFooter;