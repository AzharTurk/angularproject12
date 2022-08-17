import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

 // Testimonial Carousel
 testimonial = [{
  image: 'assets/images/chandan.jpg',
  name: 'Chandan Singh',
  designation: 'Designer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
}, {
  image: 'assets/images/ajeet.jpg',
  name: 'Ajeet Singh',
  designation: 'Content Writer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
}, {
  image: 'assets/images/madhu.jpg',
  name: 'Madhu Singh',
  designation: 'Lead Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
},
{
  image: 'assets/images/ajeet.jpg',
  name: 'Ajay Singh',
  designation: 'Lead Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
}];


// Teastimonial Slick slider config
testimonialSliderConfig = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// Team 
team = [{
  image: 'assets/images/team/1.jpg',
  name: 'Ajeet Singh',
  designation: 'CEO & Founder at Company'
}, {
  image: 'assets/images/team/2.jpg',
  name: 'Chandan Singh',
  designation: 'CEO & Founder at Company'
}, {
  image: 'assets/images/team/3.jpg',
  name: 'Madhu Singh',
  designation: 'Designer & Content Writer'
}, {
  image: 'assets/images/team/4.jpg',
  name: 'Priyanshu Singh',
  designation: 'Lead Developer'
}];

// Team Slick slider config
teamSliderConfig = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  constructor() { }

  ngOnInit(): void {
    // https://github.com/kenwheeler/slick
    // http://kenwheeler.github.io/slick/
  }

}
