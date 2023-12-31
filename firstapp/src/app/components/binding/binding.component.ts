import { Component, OnChanges, OnDestroy,OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  implements OnInit,OnChanges,OnDestroy {
  ngOnDestroy(): void {
    console.log('from...ngOnDestroy');
    //throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('from...ngOnChanges');
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log('from....ngOnInit');
    //throw new Error('Method not implemented.');
  }
  productId: number=127676;
  description="Apple Mac Book ";
  qty: number=0;
  price: number = 1800001;
  available:string='green';
  delivery: string='red';
  orderedQty: number=0;
  isMember= false;
  isQtyAvailable= this.qty > 0;
  items : Item[] =[
    new Item(1,'iphone 14','smart phone',780000,2),
    new Item(2,'samsung galaxy','smart phone',565900,8),
    new Item(3,'Oneplus 11','smartphone',90888,8)
  ];
 
  

  takeOrder():void{
    console.log('order placed....');
    console.log('Quantity placed:',this.orderedQty);
  }
  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];
  

}
