import { Component } from '@angular/core';
import { CCCMap } from './ccc-map.component';
import { RegoForm } from './rego-form.component';

@Component({
    selector: 'general-info',
    directives: [CCCMap, RegoForm],
    styles: [`
    .top_level_div{
        padding: 80px 0;
        min-height: 480px;
    }
    `],
    template: `
    <div class="top_level_div">
        <div class="container">
            <div class="row center-align" *ngFor="let section of sections">
                <div class="col s12">
                    <i class="large material-icons">{{ section.icon }}</i>
                    <h4>{{ section.header }}</h4>
                    <p>{{ section.description }}</p>
                    <ccc-map *ngIf="section.extra == 'map'"></ccc-map>
                    <rego-form *ngIf="section.extra == 'form'"></rego-form>
                </div>
            </div>
        </div>
    </div>
    `
})

export class GeneralInfo {
    sections: Object[] = [
        {
            'header': 'Camp Location',
            'description': `
                Located in the heart of Batu Feringghi, the Christian Convention Centre (CCC) has been the venue
                for the Penang Annual Bible Camp for many years. The site has 6 dormitories and 2 rooms which cater
                to the needs of the camp attendees. To scroll on the map below, click once to enable interaction.
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