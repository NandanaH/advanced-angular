import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'parentchild-app4';

  parentColor = "black";
  entercolor = "";


  changeColor() {
    this.parentColor = this.entercolor;
  }
}