import { Component } from '@angular/core';

@Component({
    selector: 'site-footer',
    template: `
    <footer class="page-footer teal lighten-1">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Related Links</h5>
                    <ul>
                        <li *ngFor="let link of relatedLinks">
                            <a class="grey-text text-lighten-3" href="{{ link.url }}" target="_blank">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
            © 2016 Michael Kong Yue Meng
            </div>
        </div>
    </footer>
    `
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