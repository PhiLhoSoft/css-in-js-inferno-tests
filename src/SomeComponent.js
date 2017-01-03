import Inferno from 'inferno';
import Component from 'inferno-component';

class SomeComponent extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			item: props.item,
			classNames: { container: 'Container', button: 'Button' },
		};
	}

	render(props, state)
	{
		return (
<div class={state.classNames.container + ' ' + (state.item.classNames ? state.item.classNames : '')}>
	<span>{state.item.name}</span>
	<label><input type="checkbox" value={state.item.value} checked={state.item.disabled}/>Disable</label>
	<button class={state.classNames.button}>x</button>
</div>
		);
	}
}

export default SomeComponent;