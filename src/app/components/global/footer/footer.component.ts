import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  Facebook = faFacebook;
  Twitter = faTwitter;
  Intagram = faInstagram;
  YouTube = faYoutube;
  Linkedin = faLinkedinIn;
  constructor() { }

  ngOnInit(): void {
  }

}
