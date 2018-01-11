import React, {
	Component
} from 'react';
import Index from '@/view/index/index';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
		        <Index />
		        <div className="nav">	
		        	<p className="title">我是scss测试</p>
		        	<ul>
		        		<li className="btn">asfasdfa</li>
		        	</ul>
		        </div>
		    </div>
		);
	}
}

export default App;