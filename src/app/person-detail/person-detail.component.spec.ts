import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PersonDetail, PersonDetailsService } from '../person-details.service';
import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;
  let componentElement: HTMLElement;
  let getPersonDetailsMock: jest.Mock;

  beforeEach(async () => {

    getPersonDetailsMock = jest.fn();
    const mockedRoute = { snapshot: { params: { id: 34 } } };

    await TestBed.configureTestingModule({
      declarations: [ PersonDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockedRoute },
        {
          provide: PersonDetailsService,
          useValue: {
            getPersonDetails: getPersonDetailsMock
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    jest.resetAllMocks();
    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
    componentElement = fixture.nativeElement;
  });

  it('mostra titulo de página', async () => {

    const title = componentElement.querySelector('h1');
    expect(title.textContent).toMatch(/Person details/);

  });

  it('consulta o método getPersonDetails para obter os dados completos da pessoa', async () => {

    // Arrange
    getPersonDetailsMock.mockImplementation(
      () => of(personDetail)
    );

    // Act
    fixture.detectChanges();

    // Assert
    expect(getPersonDetailsMock).toHaveBeenCalledWith(34, true);

  });

  it('enquanto os dados estão sendo carregados indica que dados estão sendo carregados', async () => {

    // Arrange
    getPersonDetailsMock.mockImplementation(
      () => new Observable(observer => {})
    );

    // Act
    fixture.detectChanges();

    // Assert
    const loading = componentElement.querySelector('.loading');
    expect(loading.textContent).toMatch(/Loading.../i);

  });

  describe('Quando ocorre um erro ao obter dados da API', () => {

    it('mensagem indica que ocorreu um erro', async () => {

      // Arrange
      getPersonDetailsMock.mockImplementation(
        () => new Observable(observer => {
          observer.error();
        })
      );

      // Act
      fixture.detectChanges();

      // Assert
      const error = componentElement.querySelector('.error');
      expect(error).toBeTruthy();
      expect(error.textContent).toMatch(/There was an error loading the page/i);

    });

    it('mensagem de loading é removida', async () => {

      // Arrange
      getPersonDetailsMock.mockImplementation(
        () => new Observable(observer => {
          observer.error();
        })
      );

      // Act
      fixture.detectChanges();

      // Assert
      const loading = componentElement.querySelector('.loading');
      expect(loading).toBeFalsy();

    });

  });

  describe('Quando os dados sao obtidos com sucesso', () => {

    it('indica o ID da pessoa', async () => {

      // Arrange
      getPersonDetailsMock.mockImplementation(
        () => of(personDetail)
      );

      // Act
      fixture.detectChanges();

      // Assert
      const details = componentElement.querySelector('.details');
      expect(details.textContent).toMatch(/ID: 1/);

    });

    it('indica o nome da pessoa', async () => {

      // Arrange
      getPersonDetailsMock.mockImplementation(
        () => of(personDetail)
      );

      // Act
      fixture.detectChanges();

      // Assert
      const details = componentElement.querySelector('.details');
      expect(details.textContent).toMatch(new RegExp(`Name: ${personDetail.fullName}`));

    });

    it('indica o endereço da pessoa', async () => {

      // Arrange
      getPersonDetailsMock.mockImplementation(
        () => of(personDetail)
      );

      // Act
      fixture.detectChanges();

      // Assert
      const details = componentElement.querySelector('.details');
      expect(details.textContent).toMatch(new RegExp(`Address: ${personDetail.currentAddress}`));

    });

  });

});


const personDetail: PersonDetail = {
  personId: 1,
  currentAddress: 'Avenida Rio Vermelho',
  dateOfBirth: '12/1/1988',
  fullName: 'Marcio Souza',
  numberOfChildren: 3
};
