import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: '', redirectTo: '/student', pathMatch: 'full'}, //must written in first
  {path: 'student', component: StudentComponent},
  {path: 'course' , component: CourseComponent},
  {path: 'course/:id' , 
  component: CourseDetailsComponent,
children: [
  {path: 'duration', component: CourseDurationComponent},
  {path: 'fee', component: CourseFeeComponent}
]},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  {path: '**' , component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
   StudentComponent,
   CourseComponent,
   PageNotFoundComponent,
   CourseDetailsComponent,
   CourseDurationComponent,
   CourseFeeComponent
];