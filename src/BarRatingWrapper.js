import Inferno from 'inferno';
import Component from 'inferno-component';

import $ from 'jquery';
import 'jquery-bar-rating/dist/themes/bars-movie.css';
import barrating from 'jquery-bar-rating';

class BarRatingWrapper extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			value: props.value,
		};
	}

	// Based on https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
	render(props)
	{
		console.log('B.render');
		// Render an empty div (select here, so that barrating finds a proper host)
		return <select ref={ref => { this.barRef = ref; }}>{this.generateOptions()}</select>;
	}

	componentDidMount()
	{
		console.log('B.componentDidMount', this.barRef);
		this.barRating = $(this.barRef).barrating(
		{
			initialRating: this.props.value,
			theme: 'bars-movie',
			showSelectedRating: false,
			onChange: this.props.onChange,
		});

		// this.renderComponent();
	}

	componentWillReceiveProps(newProps)
	{
		console.log('B.componentWillReceiveProps', newProps);
		// its important to pass the new props in
		// this.renderComponent(newProps);
		// if (newProps.value)
		// {
		// 	this.barRating.set(newProps.value);
		// }
	}

	renderComponent(props)
	{
		console.log('B.renderComponent', props);
		// if called from `componentWillReceiveProps`, then we use the new
		// props, otherwise use what we already have.
		props = props || this.props;

		// the code that used to be in `componentDidMount`
		// start a new render tree with our node and the children
		// passed in from above, this is the other side of the portal.
		Inferno.render(<select>{this.generateOptions()}</select>, this.barRef);
	}

	generateOptions()
	{
 		const list = Array.from({ length: this.props.barLength });
		const options = list.map((v, i) => <option value={i + 1}>{i + 1}</option>);
		return options;
	}
}

export default BarRatingWrapper;
