import React, {
	Component
} from 'react';
import './footer.css';

class RFooter extends Component {
	render() {
		return (
			<section className="footer">
			    <section className="index">
			      <a>
			        <i></i>
			        <p>首页</p>
			      </a>
			    </section>
			    <section className="banklist">
			      <a>
			        <i></i>
			        <p>排行榜</p>
			      </a>
			    </section>
			    <section className="profit">
			      <a>
			        <i></i>
			        <p>比收益</p>
			      </a>
			    </section>
			    <section className="club">
			      <a>
			        <i></i>
			        <p>投资</p>
			      </a>
			    </section>
			    <section className="mine">
			      <a>
			        <i></i>
			        <p>我</p>
			      </a>
			    </section>
			  </section>
		)
	}
}

export default RFooter;