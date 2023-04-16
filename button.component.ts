import { Component,OnInit,Output,Input } from '@angular/core';
import{EventEmitter} from 'stream'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() text:string='';
@Output() btnClick=new EventEmitter();

constructor(){}
  ngOnInit(): void {
  
}
onClick(){
  this.btnClick.emit()
}
}
