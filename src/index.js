// inferno module
import Inferno from 'inferno';

// app components
import CssTests from './CssTests';

if (module.hot)
{
	require('inferno-devtools');
}

const itemNumber = 5;
const data =
{
	app:
	{
		classNames: { top: 'Top', container: 'MainContainer', sideContainer: 'SideContainer', bottom: 'Bottom', title: 'Title' },
		list: Array.from({ length: 5 }).map((v, i) =>
		{
			const letter = String.fromCharCode(65 + i);
			return { name: `Item ${letter}`, value: letter.toLowerCase(), disabled: false };
		}),
		value: 7,
	},
}
const spc1 = Math.floor(itemNumber / 3);
const spc2 = 2 * spc1;
data.app.list[spc1].classNames = 'special';
data.app.list[spc2].disabled = true;
data.app.list[spc2 + 1].classNames = 'special';

Inferno.render(<CssTests app={data.app}/>, document.getElementById('app'));

if (module.hot)
{
	module.hot.accept()
}
