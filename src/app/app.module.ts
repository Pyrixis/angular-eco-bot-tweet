import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TweetListComponent } from './graph-tweet/graph-tweet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: TweetListComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, TweetListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
