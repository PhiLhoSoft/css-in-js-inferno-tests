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
			displayValue: '',
			classNames: { secondaryContainer: 'SecondaryContainer' },
		};
	}

	onChange(newValue)
	{
		// console.log('onChange', newValue);
		this.setState({ value: newValue[0].toString(), displayValue: newValue[0].toString() });
	}

	render(props, state)
	{
		// console.log('SecondarySection.render', props, state);
		return (
<aside className={state.classNames.secondaryContainer}>
	<header className={props.appClassNames.title}>
		<h2>3rd Party Library</h2>
	</header>
	<div>Selected date: {state.displayValue}</div>
	<FlatpickrWrapper value={state.value} onChange={this.onChange.bind(this)}/>
</aside>
		);
	}
}

export default SecondarySection;
