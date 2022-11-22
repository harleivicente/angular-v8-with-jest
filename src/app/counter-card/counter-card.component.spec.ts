import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterCardComponent } from './counter-card.component';

describe('CounterCardComponent', () => {
  let component: CounterCardComponent;
  let fixture: ComponentFixture<CounterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('valor inicial', () => {

    it('valor inicial é zero', async () => {
      expect(component.valor).toBe(0);
    });

  });

  describe('incrementar', () => {

    it('deve incrementar o valor interno em uma unidade', async () => {

      // Act
      component.incrementar();
      component.incrementar();

      // Assert
      expect(component.valor).toBe(2);

    });

    it.todo('o valor interno não pode passar do valor máximo');

  });

  describe('atingiuValorMaximo', () => {});

});
