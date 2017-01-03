import Inferno from 'inferno';
import Component from 'inferno-component';

// import pikaday from 'pikaday';
import 'flatpickr/dist/flatpickr.css'
import flatpickr from 'flatpickr/dist/flatpickr';

class FlatpickrWrapper extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
		};
	}

	render()
	{
		// https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md
		// Render an empty div
		return <input type="text" ref={(ref) => { this.wrapper = ref; }}/>;
	}

	componentDidMount()
	{
		var picker = flatpickr(this.wrapper,
		{
			inline: true, // show the calendar inline
			weekNumbers: true // show week numbers
		});

		// start a new React render tree with our node and the children
		// passed in from above, this is the other side of the portal.
		Inferno.render(<div>{this.props.children}</div>, this.wrapper);
	}
}

export default FlatpickrWrapper;
