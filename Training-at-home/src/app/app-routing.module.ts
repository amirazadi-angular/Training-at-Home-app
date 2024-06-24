import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { TrainingComponent } from './training/training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard,PermissionService} from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: MainComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },
  { path: 'past-training', component: PastTrainingComponent, canActivate: [AuthGuard] },
  { path: 'new-training', component: NewTrainingComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[PermissionService]
})
export class AppRoutingModule { }
