import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { angularMaterialModule } from './core/angular-material.module';
import { TrainingComponent } from './training/training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGridComponent } from './main/route-grid/route-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { StopTrainingDialogComponent } from './current-training/stop-training-dialog/stop-training-dialog.component';
import { AuthServise } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { TrueDatePipe } from './true-date.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { enviroment } from '../environments/enviroment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MainComponent,
    TrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    HeaderComponent,
    SidenavComponent,
    SidebarComponent,
    DashboardComponent,
    RouteGridComponent,
    CurrentTrainingComponent,
    StopTrainingDialogComponent,
    TrueDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    angularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebase)
  ],
  providers: [
    provideAnimationsAsync(),
    AuthServise,
    TrainingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
