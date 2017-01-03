import Inferno from 'inferno';
import Component from 'inferno-component';

import MainSection from './MainSection';
import HelpSection from './HelpSection';
import SecondarySection from './SecondarySection';

class Main extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			list: props.app.list,
			value: props.app.value,
			classNames: props.app.classNames,
		};
	}

	render()
	{
		return (
			<div class={this.state.classNames.container}>
				<MainSection list={this.state.list} appClassNames={this.state.classNames}/>
				<HelpSection appClassNames={this.state.classNames}/>
				<SecondarySection value={this.state.value} appClassNames={this.state.classNames}/>
			</div>
		);
	}
}

export default Main;