import Inferno from 'inferno';
import Component from 'inferno-component';

import SomeComponent from './SomeComponent';

class MainSection extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			list: props.list,
			classNames: { itemContainer: 'ItemContainer', button: 'Button', },
			renderingData: {},
		};
	}

	renderComponentList()
	{
		return this.state.list.map((v, i) => <SomeComponent item={this.state.list[i]}/>);
	}

	render(props, state)
	{
		return (
<section className={state.classNames.itemContainer}>
	<header className={props.appClassNames.title}>
		<h2>Main app</h2>
	</header>
	{this.renderComponentList()}
	<button className={state.classNames.button}>Update</button>
</section>
		);
	}
}

export default MainSection;
