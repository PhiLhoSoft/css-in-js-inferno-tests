import Inferno from 'inferno';

export default function AppFooter(props)
{
	return (
<footer className={props.app.classNames.bottom}>
	<small>The CSS-in-JS Performance Test</small>
</footer>
	);
}
