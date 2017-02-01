import { platformBrowser }		from '@angular/platform-browser';

import { CoreModuleNgFactory } from '../aot/src/components/core/core.module.ngfactory';

platformBrowser().bootstrapModuleFactory(CoreModuleNgFactory)
	.then(success => console.log(`Bootstrap Successful`))
	.catch(failure => console.log(failure));
