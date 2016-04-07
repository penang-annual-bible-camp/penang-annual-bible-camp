import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { Hero } from './hero.component';
import { GeneralInfo } from './general-info.component';
import { SiteFooter } from './footer.component';

@Component({
    selector: 'PABC2017-component',
    templateUrl: 'app/2017/PABC2017.component.html',
    styleUrls: ['app/2017/PABC2017.component.css'],
    directives: [Hero, GeneralInfo, SiteFooter],
    encapsulation: ViewEncapsulation.None
})

export class PABC2017Component implements OnInit {

    ngOnInit(): void {
        var clientId: string = '211375455075-6m01grm5lfj1a16fa1fu1p79ijsu2gol.apps.googleusercontent.com';
        var scopes: string[] = ['https://www.googleapis.com/auth/spreadsheets'];

        console.log('ngOnInit before authorize');
        
        gapi.auth.authorize(
            {
                client_id: clientId,
                scope: scopes.join(' '),
                immediate: true
            },
            this.handleAuthResult
        );

        console.log('ngOnInit after authorize');
    }

    private handleAuthResult = (authResult: GoogleApiOAuth2TokenObject): void => {
        console.log('handleAuthResult called');
        console.log(authResult);
        if (authResult && !authResult.error) {
            console.log('handleAuthResult successful');
        }
    }

    private callScript = (): void => {
        console.log('callScript called');
        var scriptId = 'MdTKFOnjdTGILxwSp7hil4ajS52RTwfWH';

        // Create an execution request object.
        var request = {
            'function': 'addCamper',
            'parameters': {
                'name': 'Kenny Kong Seong Yoon',
                'address': '1 Something Street, Wollongong, NSW, Australia',
                'ic': '000101-07-1936',
                'email': 'kksy@something.com',
                'phone': '012-163726492',
                'gender': 'Male',
                'church': 'Burmah Road Gospel Hall',
                'skills': ['Music', 'First Aid'],
                'instruments': ['Piano', 'Guitar'],
                't_shirt_size': 'L',
                'believer': 'Yes',
                'believer_year': '2005',
                'baptized': 'Yes',
                'baptized_year': '2008',
                'active_in_church': 'Yes',
                'active_role': 'Description blah blah blah blah blah'
            }
        };

        // Make the API request.
        var op = gapi.client.request({
            'root': 'https://script.googleapis.com',
            'path': 'v1/scripts/' + scriptId + ':run',
            'method': 'POST',
            'body': request
        });

        op.execute(resp => {
            console.log(resp);
        });
    }   
}