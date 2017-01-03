// inferno module
import Inferno from 'inferno';

// app components
import CssTests from './CssTests';

if (module.hot)
{
	require('inferno-devtools');
}

const data =
{
	app:
    {
        classNames: { top: 'Top', container: 'MainContainer', sideContainer: 'SideContainer', bottom: 'Bottom' },
        list: [],
        value: 5,
    },
}

Inferno.render(<CssTests app={data.app}/>, document.getElementById('app'));

if (module.hot)
{
	module.hot.accept()
}
