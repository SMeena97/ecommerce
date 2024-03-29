import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GoatComponent } from './goat/goat.component';
import { ChickenComponent } from './chicken/chicken.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';



 
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
	HomeComponent,
	GoatComponent,
	ChickenComponent,
	LoginComponent,
	SignupComponent,
	PaymentComponent
	
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }