import { Component } from '@angular/core';

@Component({
    selector: 'rego-questions',
    styles: [`
    li {
        margin-bottom: 12px;
    }
    `],
    template: `
    <div class="row">
        <ol>
            <li *ngFor="let field of fields">
                <p>{{ questions[field] }}</p>
                <p>
                    <input required class="with-gap" name="{{ field }}-input" type="radio" id="{{ field }}-input-yes" (click)="toggle(field, true)" />
                    <label [attr.for]="field + '-input-yes'">Yes</label>
                </p>
                <p>
                    <input required class="with-gap" name="{{ field }}-input" type="radio" id="{{ field }}-input-no" (click)="toggle(field, false)" />
                    <label [attr.for]="field + '-input-no'">No</label>
                </p>
                <p *ngIf="(field == 'believer' || field == 'baptized') && answers[field]">
                    <input required placeholder="Year" type="text" [(ngModel)]="years[field]">
                </p>
            </li>
            <li *ngIf="answers['active']">
                <p>
                    What is your involvement and role in your church/Christian organization?
                </p>
                <p>
                    <input placeholder="Involvement and role" type="text" [(ngModel)]="involvement">
                </p>
            </li>
        </ol>
    </div>
    `
})

export class RegoQuestions {
    fields: string[] = ['believer', 'baptized', 'active'];

    questions: Object = {
        'believer': 'Have you accepted the Lord Jesus Christ as your personal Saviour and Lord?',
        'baptized': 'Have you been baptized?',
        'active': 'Are you actively involved in any ministry(s) within your church or any Christian organization outside your church?'
    };

    answers: Object = {
        'believer': false,
        'baptized': false,
        'active': false
    };

    years: Object = {
        'believer': '',
        'baptized': ''
    };    

    involvement: string = '';

    toggle(field: string, answer: boolean): void {
        this.answers[field] = answer;
    }

    getData(): Object {
        let targetObj = {
            'believer_year': this.years['believer'],
            'baptized_year': this.years['baptized'],
            'involvement': this.involvement
        };
        return jQuery.extend(targetObj, this.answers);
    }
}