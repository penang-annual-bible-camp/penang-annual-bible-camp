import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'rego-form',
    templateUrl: 'app/2017/rego-form.component.html',
    directives: [FORM_DIRECTIVES]
})

export class RegoForm {
    regoFormModel: Object = {
        
    };
    shirtSizes: String[] = ['S', 'M', 'L', 'XL', 'XXL'];
    questions: String[] = [
        'Have you accepted the Lord Jesus Christ as your personal Saviour and Lord?',
        'Have you been baptized?',
        'Are you actively involved in any ministry(s) within your church or any Christian organization outside your church?'
    ];   
}