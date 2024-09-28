import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PusherService } from './shared/services/pusher.service';
import { HttpService } from './shared/services/http.service';
import { CookiesService } from './shared/services/cookies.service';
import Pusher from 'pusher-js/types/src/core/pusher';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private pusherService: PusherService,
    private http: HttpService,
    private cookie: CookiesService,
    private router: Router
  ) {}

  po = {
    teacher_id: '9',
    course_id: '6',
    status: 'accept',
    amount: '100',
    type_course: 'arabic',
    type_subscribe: 'trial course',
    name_course: 'arabic',
    systemHour: '6',
  };
  token = '';

  pay() {
    this.http
      .addData('api/paymentAndAddCourseStudent', this.po, this.token)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnInit() {
    // ====================
    // AOS Library ========
    // ====================
    AOS.init({
      // تهيئة AOS لضبطه على التحديث عند ظهور العناصر
      once: false, // التحريك يحدث مرة واحدة أو كلما ظهر العنصر
      offset: 120, // المسافة من الإطار السفلي للشاشة قبل بدء التحريك
      delay: 500, // تأخير بدء التحريك
      duration: 1000, // مدة التحريك
    });
    //

    // scroll to top after routing
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // يجعل الصفحة تذهب إلى أعلى بعد كل عملية routing
      }
    });

    // this.pusherService.subscribe(
    //   'notifications.1',
    //   `App\\Events\\NotificationCreated`,
    //   this.handleEvent.bind(this)
    // );
    // // Get user token
    // this.token = this.cookie.getCookie('access_token');
  }

  ngOnDestroy() {
    // this.pusherService.unsubscribe('notifications.1');
  }

  handleEvent(data: any) {
    // console.log('** Received event data:', data);
  }
}
