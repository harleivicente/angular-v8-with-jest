import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardComponent } from './person-card.component';

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('deve mostrar mensagem de load enquando dados não carregam', async () => {

    // Arrange & Act
    component.loading = true;
    fixture.detectChanges();

    // Assert
    const messageElement = nativeElement.querySelector('span');
    expect(messageElement.textContent).toMatch(/Carregando/i);

  });

  it('deve mostar empty state se pessoa não for fornecida', async () => {

    // Arrange & Act
    component.person = null;
    component.loading = false;
    fixture.detectChanges();

    // Assert
    const messageElement = nativeElement.querySelector('.status');
    expect(messageElement).toBeTruthy();
    expect(messageElement.textContent).toEqual('Nenhuma pessoa foi passada.');

  });

  it('deve mostrar o ID, nome e idade da pessoa caso pessoa seja fornecida', async () => {

    // Arrange
    const mockedPerson = {
      age: 20,
      id: 34,
      isCustomer: false,
      name: 'Renato'
    };

    // Act
    component.person =  mockedPerson;
    component.loading = false;
    fixture.detectChanges();

    // Assert
    const id = nativeElement.querySelector('.block.id');
    const nome = nativeElement.querySelector('.block.name');
    const idade = nativeElement.querySelector('.block.age');

    expect(id.textContent).toEqual(`ID: ${mockedPerson.id}`);
    expect(nome.textContent).toEqual(`Name: ${mockedPerson.name}`);
    expect(idade.textContent).toEqual(`Age: ${mockedPerson.age} years`);

  });


  describe('Badge de cliente', () => {

    it('não deve mostar o badge de customer quando a pessoa não for cliente', async () => {
  
      // Arrange
      const mockedPerson = {
        age: 20,
        id: 34,
        isCustomer: false,
        name: 'Renato'
      };
  
      // Act
      component.person =  mockedPerson;
      component.loading = false;
      fixture.detectChanges();
  
      // Assert
      const badge = nativeElement.querySelector('.badge');
      expect(badge).toBeFalsy();
  
    });

    it('deve mostar o badge de customer quando a pessoa for cliente', async () => {
  
      // Arrange
      const mockedPerson = {
        age: 20,
        id: 34,
        isCustomer: true,
        name: 'Renato'
      };
  
      // Act
      component.person =  mockedPerson;
      component.loading = false;
      fixture.detectChanges();
  
      // Assert
      const badge = nativeElement.querySelector('.badge');
      expect(badge.textContent).toEqual('CUSTOMER');
  
    });
  });

});
