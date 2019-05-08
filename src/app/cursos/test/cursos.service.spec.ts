import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

import { CursosService } from '../cursos.service';
import { Curso } from '../model/curso';

describe('deve listar cursos com id = 1', async() => {
  let httpMock = jasmine.createSpyObj('Http', [ 'get']);
  let curso: Curso;
  let response;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursosService]  
    });
    
    curso = new Curso(5,'PHP','30');
  })

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
  
  it('deve ser possivel adicionar cursos', inject([CursosService], (service: CursosService) => {
      
    spyOn(service, 'adicionar').and.returnValue(curso).and.returnValue(new Observable((subscriber)=>{ //subscriber or observer
      subscriber.next(curso)
    }));
    
    service.adicionar(curso).subscribe( res => {
      response = res;
    });
    
    expect(service.adicionar).toHaveBeenCalled();
    expect(response.id).toEqual(curso.id);
  }));  
  //
  it('deve ser possivel adicionar cursos', inject([CursosService], (service: CursosService) => {
      
    spyOn(service, 'adicionar').and.returnValue(curso).and.returnValue(new Observable((subscriber)=>{ //subscriber or observer
      subscriber.next(curso)
    }));
    
    service.adicionar(curso).subscribe( res => {
      response = res;
    });
    
    expect(service.adicionar).toHaveBeenCalled();
    expect(response.id).toEqual(curso.id);
  }));  
  //
  it('deve ser possivel deletar cursos', inject([CursosService], (service: CursosService) => {
    let menssagem = 'deletado';
    // let httpResponseEvent:HttpResponse<any> = new HttpResponse<any>({body:responseData});
    spyOn(service, 'adicionar').and.returnValue(curso).and.returnValue(new Observable((subscriber)=>{ //subscriber or observer
      subscriber.next(curso)
    }));
    
    service.adicionar(curso).subscribe( res => {
      response = res;
    });

    spyOn(service, 'delete').and.returnValue(menssagem);
    spyOn(service, 'listar2').and.returnValue(new Observable((subscriber)=>{ //subscriber or observer
        subscriber.next(curso)}));
    service.delete(curso.id);
    //
    expect(menssagem).toBe('deletado'); // 
  }));    
})