import Inferno from 'inferno';

import AppHeader from './AppHeader';
import Main from './Main';
import AppFooter from './AppFooter';

export default function CssTests(props)
{
	return (
<div>
	<AppHeader app={props.app}/>
	<Main app={props.app}/>
	<AppFooter app={props.app}/>
</div>
);
}
