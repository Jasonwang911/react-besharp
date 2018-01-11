import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import RouteMap from './router/router';

// class RootRouter extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<RouteMap />
// 			</div>
// 		)
// 	}
// }



ReactDOM.render(<RouteMap />, document.getElementById('root'));
registerServiceWorker();