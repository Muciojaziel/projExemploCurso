import { Component, OnInit} from '@angular/core';

import { CursosService } from '../cursos.service';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass'],
  preserveWhitespaces: true
})
export class CursosComponent implements OnInit {
  cursos: Curso;
  cursoId;
  
  formCursos: any = {
    nome: '',
    valor: ''
  }

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.listar();
  }

  listar () {
     this.cursosService.listar2().subscribe( r => {
      this.cursos = r;
      console.log('CursosBA', this.cursos);
    });
  }

  listarId (form) {
    let cId = form.value.id;
    this.cursosService.listarporId(cId).subscribe( r => {
      // console.log('id no componetn: ', cId);
      this.cursoId = r;
      console.log('Cursos por ID', this.cursoId);
    });
  }

  gravar(fc) {
    // console.log('fc: ',fc.value.nome  + '-' + fc.value.valor );
    let curso: Curso = {
      nome: fc.value.nome,
      valor: fc.value.valor
    }
    this.cursosService.adicionar(curso).subscribe( r => {
      let result = r;
      console.log('Result', result);
    });
  }

  apagar (id) {
    this.cursosService.delete(id).subscribe( r => {
      let result = r;
      console.log('Deletado Registro', result);
    });
  }
}
