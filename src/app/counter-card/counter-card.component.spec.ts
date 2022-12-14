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


  it('valor inicial é zero', () => {
    expect(component.valor).toBe(0);
  });

  it('deve incrementar o valor interno em uma unidade ao executar o metodo incrementar', () => {

    // Act
    component.incrementar();
    component.incrementar();

    // Assert
    expect(component.valor).toBe(2);

  });

  it('o valor interno não pode passar do valor máximo', () => {

    // Act
    component.incrementar();
    component.incrementar();
    component.incrementar();
    component.incrementar();

    // Assert
    expect(component.valor).toStrictEqual(3);

  });


});
