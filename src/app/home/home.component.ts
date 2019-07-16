import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from '../db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contato: FormGroup = new FormGroup({
    nome: new FormControl(null),
    telefone: new FormControl(null),
    email: new FormControl(null)
  })
  constructor(private db: DbService) { }

  ngOnInit() {
    this.buscarContato()
  }

  salvarContato() {
    console.log(this.contato.value)
    this.contato.reset()
  }

  async buscarContato() {
    let resp = await this.db.buscarContato();
    console.log(resp);
  }
}
