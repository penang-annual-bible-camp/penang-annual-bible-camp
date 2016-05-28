import { Component } from '@angular/core';

@Component({
    selector: 'rego-details',
    templateUrl: 'app/2017/rego-details.component.html'
})

export class RegoDetails {
    detailsModel: Object = {
        'name': '',
        'address': '',
        'ic_number': '',
        'email': '',
        'phone': '',
        'gender': '',
        'church': '',
        'skills': [],
        'instruments': '',
        'shirt_size': ''
    };
    shirtSizes: String[] = ['S', 'M', 'L', 'XL', 'XXL'];

    toggleSkills(skill: String, checked: boolean): void {
        if (checked) {
            this.detailsModel['skills'].push(skill);
        } else {
            let index = this.detailsModel['skills'].indexOf(skill);
            if (index > -1) {
                this.detailsModel['skills'].splice(index, 1);
            }
        }
    }

    getData(): Object {
        let targetObj = {
            'skills': this.detailsModel['skills'].join(', ')
        };
        return jQuery.extend({}, this.detailsModel, targetObj);
    }
}