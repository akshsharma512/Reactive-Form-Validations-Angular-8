import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { OnlyNumberDirective } from './directives/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
