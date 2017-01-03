import Inferno from 'inferno';

export default function AppHeader(props)
{
	return (
<header className={props.app.classNames.top}>
	<h1>CSS-in-JS Inferno Tests</h1>
</header>
	);
}
