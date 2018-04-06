import { Component, OnInit, Injectable } from '@angular/core';
import { Autenticacao } from './../autenticacao.service'

@Injectable()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public sair(): void {
    this.autenticacao.sair()
  }

}
