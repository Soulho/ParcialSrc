import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Array<Curso> = [];
  constructor(private cursoService: CursosService) { }

  getCursos() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  getCursosCertificate(): string{
    let respuesta: string = "Los cursos ";
    for (const curso of this.cursos) {
      if (curso.offers_certificate){
        respuesta += curso.id.toString() + " "; 
      }
    }
    respuesta += "ofrecen certificado"
    return respuesta
  }
  selectedCourse!: Curso ;
  isCardVisible: boolean = false;

  showCourseInfo(course: Curso): void {
    console.log(course)
    console.log(this.isCardVisible)
    this.selectedCourse = course;
    this.isCardVisible = true;
  }

  ngOnInit() {
    this.getCursos();
  }

}
