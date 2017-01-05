import Inferno from 'inferno';
import Component from 'inferno-component';

import 'flatpickr/dist/flatpickr.css';
import flatpickr from 'flatpickr/dist/flatpickr';

class FlatpickrWrapper extends Component
{
	constructor(props)
	{
		// console.log('FlatpickrWrapper.constructor', props);
		super(props);
		this.state =
		{
			value: props.value,
		};
	}

	// Based on https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
	// but also on https://github.com/coderhaoxin/react-flatpickr/blob/master/lib/index.js
	render(props)
	{
		// console.log('FlatpickrWrapper.render');
		// Render an empty div (here an input as we attach the Flatpickr to it, and it must be in the Dom already).
		return <input type="text" ref={ref => { this.input = ref; }}/>;
	}

	componentDidMount()
	{
		// console.log('FlatpickrWrapper.componentDidMount', this.input);
		this.picker = flatpickr(this.input,
		{
			inline: true, // show the calendar inline
			weekNumbers: true, // show week numbers
			onChange: this.props.onChange,
		});
	}

	componentWillReceiveProps(newProps)
	{
		// console.log('FlatpickrWrapper.componentWillReceiveProps', newProps);
		if (newProps.value)
		{
			// this.picker.setDate(newProps.value)
		}
	}
}

export default FlatpickrWrapper;
