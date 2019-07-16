import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contato : FormGroup = new FormGroup({
    nome : new FormControl(null),
    telefone : new FormControl(null),
    email: new FormControl(null)
  })
  constructor() { }

  ngOnInit() {
  }

  salvarContato(){
    console.log(this.contato.value)
    this.contato.reset()
      
  }

}
