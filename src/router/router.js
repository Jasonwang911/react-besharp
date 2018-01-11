import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Index from './../view/index/index';
import Investment from './../view/investment/investment';
import Mine from './../view/mine/mine.js';
import Profit from './../view/profit/profit';
import RankList from './../view/rankList/rankList';
import Page404 from './../view/404/page404';
import RFooter from '@/components/common/footer/footer';

class RouteMap extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Index} />
					<Route path="rankList" component={RankList} />
					<Route path="profit" component={Profit} />
					<Route path="investment" component={Investment} />
					<Route path="mine" component={Mine} />
					<Route path="404" component={Page404} />
					<RFooter/>
				</div>
			</Router>
		)
	}
}

export default RouteMap;