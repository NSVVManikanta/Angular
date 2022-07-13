import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: '', redirectTo: '/student', pathMatch: 'full'}, //must written in first
  {path: 'student', component: StudentComponent},
  {path: 'course' , component: CourseComponent},
  {path: 'course/:id' , component: CourseDetailsComponent},
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
   CourseDetailsComponent
];