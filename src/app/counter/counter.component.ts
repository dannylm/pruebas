import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as action from '../contador.actions'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$:any


  constructor(private store: Store<{ count : number}>) { }

  ngOnInit(){
    this.count$ = this.store.pipe(select('count'));
  }

  incremento(){
    this.store.dispatch(action.increment())
  }

  decremento(){
    this.store.dispatch(action.decrement())
  }

  random(){
    this.store.dispatch(action.random())
  }

  jump(n:number){
    this.store.dispatch(action.jump({num: n}))
  }
}
