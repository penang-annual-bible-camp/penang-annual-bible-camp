import { Component } from 'angular2/core';
import { CCCMap } from './ccc-map.component';
import { RegoForm } from './rego-form.component';

@Component({
    selector: 'general-info',
    templateUrl: 'app/2017/general-info.component.html',
    directives: [CCCMap, RegoForm]
})

export class GeneralInfo {
    sections: Object[] = [
        {
            'header': 'Camp Location',
            'description': `
                Located in the heart of Batu Feringghi, the Christian Convention Centre (CCC) has been the venue
                for the Penang Annual Bible Camp for many years. The site has 6 dormitories and 2 rooms which cater
                to the needs of the camp attendees.
            `,
            'icon': 'pin_drop',
            'extra': 'map'
        },
        {
            'header': 'Camp Duration',
            'description': `
                The Penang Annual Bible Camp is held over a week (7 days) in early December starting on a Sunday afternoon
                and ending on Saturday afternoon. During the duration of this camp, all campers are required to participate
                in camp activities unless the camper has a specified medical condition. 
            `,
            'icon': 'schedule'
        },
        {
            'header': 'Camp Registration',
            'description': `
                We would love you to join us for a week of fun, and learning about God and His Word! 
            `,   
            'icon': 'edit',
            'extra': 'form'
        }
    ];
}