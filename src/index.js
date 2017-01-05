// Inferno module
import Inferno from 'inferno';

// App components
import CssTests from './CssTests';

/* eslint-env node */
if (module.hot)
{
	require('inferno-devtools');
}

const itemNumber = 7;
const data =
{
	app:
	{
		classNames: { top: 'Top', container: 'MainContainer', sideContainer: 'SideContainer', bottom: 'Bottom', title: 'Title' },
		list: Array.from({ length: itemNumber }).map((v, i) =>
		{
			const letter = String.fromCharCode(65 + i);
			return { name: `Item ${letter}`, value: letter.toLowerCase(), rating: (i * 32) % 5 + 1, disabled: false };
		}),
		value: '2012-12-12',
	},
};
const spc1 = Math.floor(itemNumber / 3);
const spc2 = 2 * spc1;
data.app.list[spc1].classNames = 'removed';
data.app.list[spc2].disabled = true;
data.app.list[spc2 + 1].classNames = 'removed';

Inferno.render(<CssTests app={data.app}/>, document.getElementById('app'));
// Inferno.render(<CssTests app={data.app}/>, document.body);

if (module.hot)
{
	module.hot.accept();
}
