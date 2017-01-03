import Inferno from 'inferno';
import Component from 'inferno-component';

//import SomeComponent from './SomeComponent';

function renderComponentList(componentName, componentNumber, appData, renderingData)
{
	const l = new Array(componentNumber).fill(0);
	return <ul>{l.map((v, i) => <li>{componentName} {i}</li>)}</ul>
}

class MainSection extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			list: props.list,
			classNames: { title: props.appClassNames.title, itemContainer: 'ItemContainer', button: 'Button', },
			itemNumber: 5,
			renderingData: {},
		};
	}

	render()
	{
		return (
<section className={this.state.classNames.itemContainer}>
	<header className={this.state.classNames.title}>
		<h2>Main app</h2>
	</header>
	{renderComponentList('item', this.state.itemNumber, this.state, this.state.renderingData)}
	<button className={this.state.classNames.button}>Update</button>
</section>
		);
	}
}

export default MainSection;
