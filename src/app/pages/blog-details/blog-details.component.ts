import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details.component.html',
})
export class BlogDetailsComponent {
  blogId: any;
  activeTab: string = 'overview';
  blog: object = {
    blog_name: 'Blog Title Here',
    created_at: '2024-05-01T13:29:59.000000Z',
    grade: '4',
    id: 1,
    // imgUrl: 'https://picsum.photos/300/201',
    imgUrl: './assets/images/girl-in-meeting.png',
    level: 'o',
    major: 'IGCSE',
    number_of_sessions: 3,
    price: '100.00',
    session_duration: 1,
    status: 'Reading',
    subject: 'arabic',
    teacher: {
      about: 'good',
      age: 45,
      created_at: '2024-05-01T13:29:24.000000Z',
      email: 'khatab51@gmail.com',
      email_verified_at: null,
      experience_years: 5,
      gender: 'female',
      grade: '3',
      id: 1,
      intro_video_url:
        'http://127.0.0.1:8000/videos/التعلم والتعليم واهميتها مقطع رائع في اقل من دقيقة.mp4',
      level: '3',
      major: 'english',
      name: 'sayed',
      password: '$2y$10$6jJc.YS3sHT7LbQeguAZp.dPWBck7oW3TfOstct5VoWSzU3NDgjAK',
      phone: '011245456',
      photo: './assets/images/teacher.png',
      subject: 'english',
      type: 'unlocked',
      updated_at: '2024-05-01T13:29:24.000000Z',
    },
  };

  recentPost: object[] = [
    {
      img: 'https://picsum.photos/300/200',
      date: '2024-05-01T13:29:59.000000Z',
      name: 'Lorem Ipsum is simply dummy',
    },
    {
      img: 'https://picsum.photos/300/201',
      date: '2024-05-01T13:29:59.000000Z',
      name: 'Lorem Ipsum is simply dummy',
    },
    {
      img: 'https://picsum.photos/300/202',
      date: '2024-05-01T13:29:59.000000Z',
      name: 'Lorem Ipsum is simply dummy',
    },
    {
      img: 'https://picsum.photos/300/203',
      date: '2024-05-01T13:29:59.000000Z',
      name: 'Lorem Ipsum is simply dummy',
    },
  ];

  tags = [
    'Tag Title Here',
    'Tag Title',
    'Tag Title',
    'Tag Title',
    'Tag Title',
    'Tag Title',
    'Tag Title',
    'Tag Title Here',
    'Tag Title',
    'Tag Title Here',
    'Tag Title',
    'Tag Title',
  ];
}
