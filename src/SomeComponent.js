import Inferno from 'inferno';
import Component from 'inferno-component';

import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';

import BarRatingWrapper from './BarRatingWrapper';

class SomeComponent extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			item: props.item,
			classNames: {},
		};

		this.styleSheet = this.createStyleSheet();

		const jss = create(preset());
		const sheets = new SheetsRegistry();

		const css = jss.createStyleSheet(this.styleSheet).attach();
		this.state.classNames = [ 'container', 'button' ].reduce((m, className) => { m[className] = css.classes[className]; return m; }, {});
	}

	createComponentStyle(options)
	{
		return {
			backgroundColor: 'seashell',
			color: 'navy',
			fontSize: '24px',
			padding: '10px',
			'&:hover': { backgroundColor: 'moccassin' },

			'& span': { margin: '0 20px 0 30px' },
			'& .br-wrapper': { display: 'inline-block', margin: '0 30px' },
			'& button': { marginLeft: '30px' },
			'&.removed': { backgroundColor: 'tan' },
			'&.removed button': { display: 'none' },
		};
	}

	createButtonStyle(options)
	{
		const buttonSize = '30px';
		return {
			backgroundColor: 'red',
			color: 'yellow',
			fontSize: '24px',
			border: 'none',
			width: buttonSize,
			height: buttonSize,
			borderRadius: '50%',
			cursor: 'grab', // Need prefix for webkit
			'&:hover': { color: 'orange' },
		};
	}

	createStyleSheet(options)
	{
		return {
			container: this.createComponentStyle(options),
			button: this.createButtonStyle(options),
		};
	}

	render(props, state)
	{
		return (
<div className={state.classNames.container + ' ' + (state.item.classNames ? state.item.classNames : '')}>
	<span>{state.item.name}</span>
	<BarRatingWrapper barLength="5" value={state.item.rating}/>
	<label><input type="checkbox" value={state.item.value} checked={state.item.disabled}/>Disable</label>
	<button className={state.classNames.button}>x</button>
</div>
		);
	}
}

export default SomeComponent;
