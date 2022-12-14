import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonService } from '../person.service';
import { clickButton, fillInput, findInput } from '../utils/testing';

import { CreatePersonComponent } from './create-person.component';

describe('CreatePersonComponent', () => {
  let component: CreatePersonComponent;
  let fixture: ComponentFixture<CreatePersonComponent>;
  let componentElement: HTMLElement;
  let createPersonMock: jest.Mock;

  beforeEach(async () => {

    createPersonMock = jest.fn();

    await TestBed.configureTestingModule({
      declarations: [ CreatePersonComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: PersonService, useValue: {
            createPerson: createPersonMock
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    jest.resetAllMocks();
    fixture = TestBed.createComponent(CreatePersonComponent);
    component = fixture.componentInstance;
    componentElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('Formulário não esta preechido de forma correta', () => {

    it('O button de submit deve estar desabilitado', () => {

      const submit: HTMLButtonElement = componentElement.querySelector('button[type="submit"]');
      expect(submit.hasAttribute('disabled')).toBeTruthy();

    });

    it.todo('Não envia dados para API');

  });

  describe('Formulário preenchido corretamente', () => {

    it.todo('O submit deve estar habilitado');

    it.todo('Ao clicar em "Enviar" envia dados para endpoint de criação');

  });

  describe('Validação do campo nome', () => {

    it.todo('renderiza mensagem de erro caso o nome seja menor que 4 caracteres');

    it.todo('renderiza mensagem de erro caso o nome seja maior que 20 caracteres');

    it('não mostra mensagem de erro caso o nome seja válido', () => {

      // Arrange
      const nome = findInput(componentElement, 'name');

      // Act
      fillInput(nome, 'Mario');
      fixture.detectChanges();

      // Assert
      const error = componentElement.querySelector('.name.error');
      expect(error).toBeFalsy();

    });

  });

  describe('Validação do campo idade', () => {

    it.todo('renderiza error caso esteja vazio');

    it.todo('renderiza erro caso valor não seja um numero');

    it('não renderiza erro caso valor seja um numero', () => {

      // Arrange
      const nome = findInput(componentElement, 'age');

      // Act
      fillInput(nome, '34');
      fixture.detectChanges();

      // Assert
      const error = componentElement.querySelector('.age.error');
      expect(error).toBeFalsy();

    });

  });

  describe('Envido dos dados do form', () => {

    it('Indica estado de loading enquando os dados são enviados', () => {

      // Arrange
      createPersonMock.mockImplementation(() => new Observable());

      const nome = findInput(componentElement, 'name');
      const age = findInput(componentElement, 'age');
      fillInput(nome, 'Helena');
      fillInput(age, '24');
      fixture.detectChanges();

      // Act
      const enviar: HTMLButtonElement = componentElement.querySelector('button[type="submit"]');
      clickButton(enviar);

      // Assert
      expect(createPersonMock).toHaveBeenCalledWith({
        age: `24`,
        name: `Helena`,
        gender: `FEMALE`
      });

    });


    it.todo('Renderiza mensagem de sucesso caso endpoint tenha sucesso');

    it.todo('Renderiza mensagem de error caso endpoint tenha sucesso');

  });

});
