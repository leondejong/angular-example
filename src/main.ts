import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CoreModule } from './components/core/core.module';

platformBrowserDynamic().bootstrapModule(CoreModule)
	.then(success => console.log(`Bootstrap Successful`))
	.catch(failure => console.log(failure));
