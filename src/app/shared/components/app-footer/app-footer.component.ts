import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
})
export class AppFooterComponent implements AfterViewInit {
  @ViewChild('crYear') crYear: ElementRef;

  info: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
  address: string = '22 Lorem ,Ipsum ,is simply ';
  phone: string = '+9952342343234';

  socialLinks = {
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com',
    whatsapp: 'https://www.wa.com',
    youtube: 'https://www.youtube.com',
    googlePlay: '',
    appleStore: '',
  };

  ngAfterViewInit() {
    this.crYear.nativeElement.innerText = new Date().getFullYear();
  }
}
