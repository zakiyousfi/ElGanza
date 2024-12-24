import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { CarComponent } from './components/car/car.component';
import { CardComponent } from './components/card/card.component';
import { SingupComponent } from './components/singup/singup.component';
import { LoginComponent } from './components/login/login.component';
import { achatComponent } from './components/achat/achat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FactureComponent } from './components/facture/facture.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    StoreComponent,
    CarComponent,
    CardComponent,
    SingupComponent,
    LoginComponent,
    achatComponent,
    DashboardComponent,
    FactureComponent,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //TDF
    ReactiveFormsModule, //Reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
