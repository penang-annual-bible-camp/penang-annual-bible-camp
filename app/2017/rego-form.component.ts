import { Component, OnInit, ViewChild } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { RegoDetails } from './rego-details.component';
import { RegoQuestions } from './rego-questions.component';

@Component({
    selector: 'rego-form',
    directives: [FORM_DIRECTIVES, RegoDetails, RegoQuestions],
    template: `
    <div class="card left-align">
        <div class="card-content">
            <span class="card-title">Penang Annual Bible Camp 2017 Registration Form</span>
            
            <div class="divider"></div>
            
            <section class="row">
                <form class="col s12" action="" method="POST">
                    <rego-details></rego-details>
                    <div class="divider"></div>
                    <rego-questions></rego-questions>
                    <div class="g-recaptcha" data-sitekey="6Lfk3B0TAAAAAFse8cPewXkyY0bDkduakmkGOQT6"></div>
                </form>
            </section>
        </div>
        <div class="card-action right-align">
            <a class="waves-effect btn green">Submit</a>
        </div>
    </div>
    `
})

//<a class="waves-effect btn green" (click)="submit()">Submit</a>

export class RegoForm implements OnInit {
    @ViewChild(RegoDetails) regoDetails;
    @ViewChild(RegoQuestions) regoQuestions;
    
    ngOnInit(): void {
        var clientId: string = '211375455075-6m01grm5lfj1a16fa1fu1p79ijsu2gol.apps.googleusercontent.com';
        var scopes: string[] = ['https://www.googleapis.com/auth/spreadsheets'];

        // console.log('ngOnInit before authorize');
        
        gapi.auth.authorize(
            {
                client_id: clientId,
                scope: scopes.join(' '),
                immediate: true
            },
            this.handleAuthResult
        );

        // console.log('ngOnInit after authorize');
    }

    private handleAuthResult = (authResult: GoogleApiOAuth2TokenObject): void => {
        // console.log('handleAuthResult called');
        // console.log(authResult);
        if (authResult && !authResult.error) {
            // console.log('handleAuthResult successful');
        }
    }

    submit(): void {
        let dataObj = jQuery.extend({}, this.regoDetails.getData(), this.regoQuestions.getData());

        // console.log(dataObj);
        let scriptId = 'MdTKFOnjdTGILxwSp7hil4ajS52RTwfWH';

        let request = {
            'function': 'addCamper',
            'parameters': dataObj
        };

        // Make the API request.
        var op = gapi.client.request({
            'root': 'https://script.googleapis.com',
            'path': 'v1/scripts/' + scriptId + ':run',
            'method': 'POST',
            'body': request
        });

        op.execute(resp => {
            if (resp.error && resp.error.status) {
                console.log(resp);
            } else {
                alert('You have successfully registered! See you at the Penang Annual Bible Camp 2017!');
            }
        });
    }
}