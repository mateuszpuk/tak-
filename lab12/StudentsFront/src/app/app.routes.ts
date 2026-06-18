import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AboutComponent } from './about/about.component'; // 1. Import nowego komponentu

export const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'student-detail/:id', component: StudentDetailComponent },
  { path: 'about', component: AboutComponent }, // 2. Dodanie trasy dla 'about'
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];