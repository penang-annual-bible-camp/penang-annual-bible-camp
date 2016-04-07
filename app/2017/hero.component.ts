import { Component } from 'angular2/core';

@Component({
    selector: 'hero',
    templateUrl: 'app/2017/hero.component.html'
})

export class Hero {
    description: string = `
        Held in December each year, the Penang Annual Bible Camp (PABC)
        has been running for over 6 decades. The PABC runs over a week
        with many engaging activities including outdoor sports,
        indoor sports, games, quizzes and of course, talks from the Word 
        of God! Every year, campers are divided into 3 groups with names
        that stem from the theme of the camp.
    `;
}