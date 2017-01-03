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
		};
	}

	render(props, state)
	{
		return (
<div className={props.app.classNames.container}>
	<MainSection list={props.app.list} appClassNames={props.app.classNames}/>
	<div className={props.app.classNames.sideContainer}>
		<HelpSection appClassNames={props.app.classNames}/>
		<SecondarySection value={props.app.value} appClassNames={props.app.classNames}/>
	</div>
</div>
		);
	}
}

export default Main;
