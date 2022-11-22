import { Component, OnInit } from '@angular/core';

const VALOR_MAXIMO = 3;
@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss']
})
export class CounterCardComponent implements OnInit {
  valor = 0;

  constructor() {}

  ngOnInit(): void {}

  incrementar() {
    this.valor = this.valor + 1;
  }

  get atingiuValorMaximo(): boolean {
    return VALOR_MAXIMO === this.valor;
  }

}
