import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { UserService } from './services/user.service';
import { PartecipantComponent } from './components/shared/partecipant/partecipant.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    RegistrationComponent,
    PartecipantComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
