import Inferno from 'inferno';
import Component from 'inferno-component';

//import SomeComponent from './SomeComponent';

function renderComponentList() { return ''; }

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
			renderingData: [],
		};
	}

	render()
	{
		return (
			<section class="{this.state.classNames.itemContainer}">
				<header class="{this.state.classNames.title}">
					<h2>Main app</h2>
				</header>
				{renderComponentList('item', this.state.itemNumber, this.state, this.state.renderingData)}
				<button class="{this.state.classNames.button}">Update</button>
			</section>
		);
	}
}

export default MainSection;
