import Inferno from 'inferno';
import Component from 'inferno-component';

class HelpSection extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			classNames: { help: 'Help' },
		};
	}

	render(props, state)
	{
		return (
<aside className={state.classNames.help}>
	<header className={props.appClassNames.title}>
		<h2>Help</h2>
	</header>
	<p>There is a main section.</p>
	<p>And, beside this one which provides a succint help, there is also an aside controlled by a library. This paragraph is long enough to wrap...</p>
</aside>
		);
	}
}

export default HelpSection;
