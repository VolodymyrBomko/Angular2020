import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import { ComentComponent } from './components/coment/coment.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    ComentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
