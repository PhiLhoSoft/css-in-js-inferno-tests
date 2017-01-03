import Inferno from 'inferno';
import Component from 'inferno-component';

class SecondarySection extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			classNames: { title: props.appClassNames.title, secondaryContainer: 'SecondaryContainer' },
		};
	}

	render()
	{
		return (
<aside className={this.state.classNames.secondaryContainer}>
	<header className={this.state.classNames.title}>
		<h2>3rd Party Library</h2>
	</header>
{/* Code generated by the library */}
<div class="container">
<span class="counter">101</span>
<button class="button">Increment</button>
</div>
</aside>
		);
	}
}

export default SecondarySection;
