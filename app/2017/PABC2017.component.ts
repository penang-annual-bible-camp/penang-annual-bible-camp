import { Component, ViewEncapsulation } from '@angular/core';
import { Hero } from './hero.component';
import { GeneralInfo } from './general-info.component';
import { SiteFooter } from './footer.component';

@Component({
    selector: 'PABC2017-component',
    directives: [Hero, GeneralInfo, SiteFooter],
    template: `
    <main>
        <hero></hero>
        <general-info></general-info>
    </main>
    <site-footer></site-footer>
    `
})

export class PABC2017Component {  
}