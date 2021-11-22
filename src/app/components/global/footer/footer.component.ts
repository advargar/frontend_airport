import { Component, OnInit, Input  } from '@angular/core';
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

  date = new Date().getFullYear();

  @Input()
  get absolute(): boolean {
    return this._absolute;
  }
  set absolute(absolute: boolean) {
    this._absolute = absolute === undefined ? false : absolute;
  }
  private _absolute = false;

  constructor() { }

  ngOnInit(): void {
  }

}
