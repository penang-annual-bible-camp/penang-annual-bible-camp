import { Component } from 'angular2/core';

@Component({
    selector: 'site-footer',
    templateUrl: 'app/2017/footer.component.html'
})

export class SiteFooter {
    relatedLinks: Object[] = [
        {
            'name': 'Penang Assemblies Partnership',
            'url': 'http://penang-assemblies.org/'
        },
        {
            'name': 'More on Christian Convention Centre',
            'url': 'http://brgh.penang-assemblies.org/?page_id=401'
        }
    ];
}