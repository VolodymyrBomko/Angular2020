import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: any[];
  posts: any[];
  coments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe(response => this.users = response)
    ;
    this.httpClient
      .get<any[]>(`http://jsonplaceholder.typicode.com/posts?_limit=10`)
      .subscribe(response => this.posts = response)
    ;
    this.httpClient
      .get<any[]>(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
      .subscribe(response => this.coments = response);
  }
}
