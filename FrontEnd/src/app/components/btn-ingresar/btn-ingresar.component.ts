import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-ingresar',
  templateUrl: './btn-ingresar.component.html',
  styleUrls: ['./btn-ingresar.component.css']
})
export class BtnIngresarComponent implements OnInit {
  //@Input() text: string = "":    //Ejemplo
  //@Input() color: string = "":    //Ejemplo  
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
