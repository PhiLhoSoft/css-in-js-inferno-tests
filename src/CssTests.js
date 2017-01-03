import Inferno from 'inferno';

import AppHeader from './AppHeader';
import Main from './Main';
import AppFooter from './AppFooter';

export default function CssTests(props)
{
	// JSX wants these 3 components to be wrapped, which is annoying, this adds 2 div layers before them!
	return (
<div>
	<AppHeader app={props.app}/>
	<Main app={props.app}/>
	<AppFooter app={props.app}/>
</div>
	);
}
