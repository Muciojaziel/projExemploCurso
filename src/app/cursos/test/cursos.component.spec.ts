import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';

import { CursosComponent } from '../cursos/cursos.component';
import { By } from '@angular/platform-browser/';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from '../cursos.service';

xdescribe('CursosComponent', () => {
  let cursosComponent: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CursosComponent ],
      providers: [CursosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    cursosComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cursosComponent).toBeTruthy();
  });

  // it('deve retornar 2 objetos testes ', inject([CursosService], (service: CursosService) => {
  //   cursosComponent.cursos = [
  //     {
  //       id: 15,
  //       nome: 'opop',
  //       valor: '30.00'
  //     },
  //     {
  //       id: 2,
  //       nome: 'Angular 6',
  //       valor: '60.00'
  //     },
  //  ]

  //  fixture.whenStable().then( () => {
  //   let debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('tr'));
  //    expect(debugElements.length).toBe(2);
  //  });
   
   //.toContain({id: 1, nome: 'Java', preco: '30.00'},{id: 2, nome: 'Angular 6', preco: '60.00'});
  // }));
});
