import { Component } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourthApp';

  bio: Student={
sname:"Shannon",
sid:"991508798",
spic:"assets/images/heroImg.jpg"
  }

  
  

}





