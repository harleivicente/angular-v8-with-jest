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

  it('deve incrementar o valor do contador', () => {
    component.increment();
    expect(component.value).toEqual(1);
  });

  it('deve iniciar com valor zero', () => {
    expect(component.value).toEqual(0);
  });

});
