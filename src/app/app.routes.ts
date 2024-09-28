import { Routes } from '@angular/router';

export const routes: Routes = [
  /** Default */
  {
    path: '',
    loadComponent: () =>
      import('./layouts/default-layout/default-layout.component').then(
        (c) => c.DefaultLayoutComponent
      ),

    children: [
      // Home
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      // All courses
      {
        path: 'all-courses',
        loadComponent: () =>
          import('./pages/all-courses/all-courses.component').then(
            (c) => c.AllCoursesComponent
          ),
      },
      // courses details
      {
        path: 'course-details',
        loadComponent: () =>
          import('./pages/course-details/course-details.component').then(
            (c) => c.CourseDetailsComponent
          ),
      },
      // courses cart
      {
        path: 'course-cart',
        loadComponent: () =>
          import('./pages/course-cart/course-cart.component').then(
            (c) => c.CourseCartComponent
          ),
      },
      // blogs
      {
        path: 'blogs',
        loadComponent: () =>
          import('./pages/blogs/blogs.component').then((c) => c.BlogsComponent),
      },
      // blog-details
      {
        path: 'blog-details',
        loadComponent: () =>
          import('./pages/blog-details/blog-details.component').then(
            (c) => c.BlogDetailsComponent
          ),
      },
      // become-tutor
      {
        path: 'become-tutor',
        loadComponent: () =>
          import('./pages/become-tutor/become-tutor.component').then(
            (c) => c.BecomeTutorComponent
          ),
      },
      // coporate-training
      {
        path: 'coporate-training',
        loadComponent: () =>
          import('./pages/coporate-training/coporate-training.component').then(
            (c) => c.CoporateTrainingComponent
          ),
      },
    ],
  },

  /** Auth */
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),

    children: [
      { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
      // Login
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./pages/auth-pages/sign-in/sign-in.component').then(
            (c) => c.SignInComponent
          ),
      },
      // sign up
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./pages/auth-pages/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
      // forgot password
      {
        path: 'forgot-password',
        loadComponent: () =>
          import(
            './pages/auth-pages/forgot-password/forgot-password.component'
          ).then((c) => c.ForgotPasswordComponent),
      },
      // verify code
      {
        path: 'verify-code',
        loadComponent: () =>
          import('./pages/auth-pages/verify-code/verify-code.component').then(
            (c) => c.VerifyCodeComponent
          ),
      },
      // set new password
      {
        path: 'set-new-password',
        loadComponent: () =>
          import(
            './pages/auth-pages/set-new-password/set-new-password.component'
          ).then((c) => c.SetNewPasswordComponent),
      },
    ],
  },

  /** Dashboard */
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./layouts/dashboard-layout/dashboard-layout.component').then(
        (c) => c.DashboardLayoutComponent
      ),
    children: [
      { path: '', redirectTo: '/dashboard/dashboard', pathMatch: 'full' },
      // Dashboard
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard-pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      // Courses (Instructors)
      {
        path: 'courses',
        loadComponent: () =>
          import('./pages/dashboard-pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
      },
      // My lessons (Students) → [Course Overview , Course Contents]
      {
        path: 'my-lessons',
        loadComponent: () =>
          import('./layouts/courses-layout/courses-layout.component').then(
            (c) => c.CoursesLayoutComponent
          ),

        children: [
          // My lessons (Students)
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/dashboard-pages/my-lessons/my-lessons.component'
              ).then((c) => c.MyLessonsComponent),
          },
          // Course Overview (Students)
          {
            path: 'course-overview',
            loadComponent: () =>
              import(
                './pages/dashboard-pages/course-overview/course-overview.component'
              ).then((c) => c.CourseOverviewComponent),
          },
          // Course Contents (Students)
          {
            path: 'course-contents',
            loadComponent: () =>
              import(
                './pages/dashboard-pages/course-contents/course-contents.component'
              ).then((c) => c.CourseContentsComponent),
          },
        ],
      },
      // Schedule
      {
        path: 'schedule',
        loadComponent: () =>
          import('./pages/dashboard-pages/schedule/schedule.component').then(
            (c) => c.ScheduleComponent
          ),
      },
      // Students (Instructors)
      {
        path: 'students',
        loadComponent: () =>
          import('./pages/dashboard-pages/students/students.component').then(
            (c) => c.StudentsComponent
          ),
      },
      // Resource (Instructors)
      {
        path: 'resource',
        loadComponent: () =>
          import('./pages/dashboard-pages/resource/resource.component').then(
            (c) => c.ResourceComponent
          ),
      },
      // Transaction (Instructors)
      {
        path: 'transaction',
        loadComponent: () =>
          import(
            './pages/dashboard-pages/transaction/transaction.component'
          ).then((c) => c.TransactionComponent),
      },
      // Live class (Instructors)
      {
        path: 'live-class',
        loadComponent: () =>
          import(
            './pages/dashboard-pages/live-class/live-class.component'
          ).then((c) => c.LiveClassComponent),
      },
      // Instructors (Students)
      {
        path: 'instructors',
        loadComponent: () =>
          import(
            './pages/dashboard-pages/instructors/instructors.component'
          ).then((c) => c.InstructorsComponent),
      },
      // Profile (Students)
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/dashboard-pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
      // Message
      {
        path: 'message',
        loadComponent: () =>
          import('./pages/dashboard-pages/message/message.component').then(
            (c) => c.MessageComponent
          ),
      },
      // Wallet
      {
        path: 'wallet',
        loadComponent: () =>
          import('./pages/dashboard-pages/wallet/wallet.component').then(
            (c) => c.WalletComponent
          ),
      },
    ],
  },
];
