import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'hero',
    styles: [`
    .header_hero > *{
        margin: 20px 0;
    }

    p.header_text{
        font-size: 1.2em;
    }

    .parallax-container{
        height: 100vh;
    }

    .hero_img:before{
        content: '';
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        background: rgba(0, 59, 101, 0.4);
    }
    `],
    template: `
    <div class="parallax-container valign-wrapper">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align header_hero">
                    <h1 class="white-text thin">Penang Annual Bible Camp 2017</h1>
                    <p class="white-text light header_text">{{ description }}</p>
                    <!--<a class="waves-effect btn blue">Register</a>-->
                </div>
            </div>
        </div>
        <div class="parallax hero_img">
            <img src="app/2017/images/captainsball.jpg">
        </div>
    </div>
    `
})

export class Hero implements AfterViewInit {
    description: string = `
        Held in December each year, the Penang Annual Bible Camp (PABC)
        has been running for over 6 decades. The PABC runs over a week
        with many engaging activities including outdoor sports,
        indoor sports, games, quizzes and of course, talks from the Word 
        of God! Every year, campers are divided into 3 groups with names
        that stem from the theme of the camp.
    `;

    el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;
    }    

    ngAfterViewInit() {
        jQuery(this.el.nativeElement).find('.parallax').parallax();
    }
}