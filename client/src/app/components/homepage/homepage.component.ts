import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    today = Date.now();
    // Carousel
    carouselOptions = {
        // margin: 25,
        nav: false,
        navText: ["<div class='nav-btn prev-slide'><img src='assets/images/nav-icon.png-prev.png'></div>", "<div class='nav-btn next-slide'><img src='assets/images/nav-icon.png-next.png'></div>"],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: false
          },
          1500: {
            items: 1,
            nav: true,
            loop: false
          }
        }
    }
    images = [
        {
          text: "Everfresh Flowers",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Festive Deer",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Morning Greens",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Bunch of Love",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Blue Clear",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Evening Clouds",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Fontains in Shadows",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Kites in the Sky",
          image: "assets/images/carousel/slider.png"
        },
        {
          text: "Sun Streak",
          image: "assets/images/carousel/slider.png"
        }
    ]

    // Carousel
    GrandCarouselOptions = {
        // margin: 25,
        nav: false,
        navText: ["<div class='nav-btn prev-slide'><img src='assets/images/grand-prev.png'></div>", "<div class='nav-btn next-slide'><img src='assets/images/grand-next.png'></div>"],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: false
          },
          1500: {
            items: 1,
            nav: true,
            loop: false
          }
        }
    }
    grandimages = [
        {
          text: "Everfresh Flowers",
          image: "assets/images/carousel/grand-slider.png"
        },
        {
          text: "Festive Deer",
          image: "assets/images/carousel/grand-slider.png"
        }
    ]
    
    constructor() { }

    ngOnInit() {

    }

}
