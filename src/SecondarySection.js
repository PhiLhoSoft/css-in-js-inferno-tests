import Inferno from 'inferno';
import Component from 'inferno-component';

import FlatpickrWrapper from './FlatpickrWrapper';

class SecondarySection extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			value: props.value,
			classNames: { secondaryContainer: 'SecondaryContainer' },
		};
	}

	render(props, state)
	{
		return (
<aside className={state.classNames.secondaryContainer}>
	<header className={props.appClassNames.title}>
		<h2>3rd Party Library</h2>
	</header>
	<FlatpickrWrapper/>
</aside>
		);
	}
}

export default SecondarySection;
