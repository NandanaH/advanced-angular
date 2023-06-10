import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  num: any=0;
  r: any=0;
  p: any=0;
  
  

  factorial(num: number) : any{
    var result=1;
    for(var i=1;i<=this.num;i++){
      result=result*i;
    }
    this.r= result;
  }
  prime(num: number) : any{
    var result=0;
    for(var i=1;i<=this.num;i++)
    {
      if(this.num%i==0)
      result++;
    }

  }
  

  
  

  

  
}
