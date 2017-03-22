import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { provideClient } from './client';
import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
        ApolloModule.forRoot(provideClient)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
