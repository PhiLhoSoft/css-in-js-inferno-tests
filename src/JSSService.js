import { create as createJSS } from 'jss';
import preset from 'jss-preset-default';

export const jss = createJSS(preset());

function create(styleSheet)
{
	return jss.createStyleSheet(styleSheet).attach();
}

// Export JSSService
const JSSService = { create };
export default JSSService;
