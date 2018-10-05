import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogProject';

  


  posts=[
    {title:"Mon premier post",
    content:"contenu 1",
    loveIts:0,
      created_at:"10/24/2017 11:00 AM"},

    {title:"Mon deuxiéme post",
      content:"contenu 2",
      loveIts:0,
      created_at:"10/24/2017 11:00 AM"},

    {title:"Encore un post",
      content:"contenu 3",
      loveIts:0,
      created_at:"10/24/2017 11:00 AM"}
  ];



}
