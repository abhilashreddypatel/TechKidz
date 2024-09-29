import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Welcome to Coding Journey';
  headline = 'Power your child with important life-skills';
  subheading =
    'Unlock your child"s full potential with our next-gen live-learning programs, paired with top tutors.';
  featuresTitle = 'Choose from the Options Below';
  feature1 = 'Feature 1 description';
  feature2 = 'Feature 2 description';
  feature3 = 'Feature 3 description';
  introduction = 'Welcome to our content section';
  contentBlock1 = 'Content block 1 description';
  contentBlock2 = 'Content block 2 description';
  contentBlock3 = 'Content block 3 description';
  ctaHeadline = 'Ready to Get Started?';
  companyName = 'Our Company Name';
  year = new Date().getFullYear();
  facebookHandle = 'ourfacebookhandle';
  twitterHandle = 'ourtwitterhandle';
  instagramHandle = 'ourinstagramhandle';
  contactInformation =
    'Contact us at [info@ourcompany.com](mailto:info@ourcompany.com) or 555-555-5555';

  ctaClick() {
    console.log('CTA button clicked!');
  }
}
