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
		};
	}

	render(props, state)
	{
		return (
<div className={props.app.classNames.container}>
	<MainSection list={state.list} appClassNames={props.app.classNames}/>
	<div className={props.app.classNames.sideContainer}>
		<HelpSection appClassNames={props.app.classNames}/>
		<SecondarySection value={state.value} appClassNames={props.app.classNames}/>
	</div>
</div>
		);
	}
}

export default Main;
