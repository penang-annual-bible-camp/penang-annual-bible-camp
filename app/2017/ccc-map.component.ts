import { Component } from 'angular2/core';

@Component({
    selector: 'ccc-map',
    template: `
        <div class="video-container">
            <iframe class="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.3072933700283!2d100.24764045537975!3d5.474187800920175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x53f070390b7405ee!2sChristian+Convention+Centre!5e0!3m2!1sen!2sau!4v1459980602325" width="400" height="300" frameborder="0" style="border:0" allowfullscreen ></iframe>
        </div>
    `
})

export class CCCMap { 
}