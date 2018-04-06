import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyDJ6BV3Em1kGGNJQnILt85cQX8KTPLXlKY",
      authDomain: "jta-instagram-clone-35bd1.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-35bd1.firebaseio.com",
      projectId: "jta-instagram-clone-35bd1",
      storageBucket: "jta-instagram-clone-35bd1.appspot.com",
      messagingSenderId: "787918936230"
    };

    firebase.initializeApp(config)

  }
}
