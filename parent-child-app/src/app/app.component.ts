import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-app';
  enterName="";
  enterUid="";
  parentData="";
  parData="";

transferData(){
  this.parentData = this.enterName;
}
sendData(){
  this.parData = this.enterUid;
}
value=""
sData(value:string)
{
  this.value=value;
}
}
