import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './model/curso';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url = 'http://localhost:3000/cursos/';
  constructor(private http: HttpClient) { }

  listar (): Observable<any> {
    return new Observable(observer => {
      try { 
        let documents; // = [];
        // let doc = any[];
        let doc = this.http.get(this.url);
        // console.log('DocService', doc);
        doc.subscribe( r => {
          documents = r;
          observer.next(documents);
          observer.complete();
      });
      } catch (e) {
        observer.error(new Error(e.message));
      }
    });   
  }

  adicionar (curso: Curso) { // :Observable<any>
    return new Observable( observer => {
      try { 
        this.http.post<Curso> (
        this.url,
          curso,
          {
            headers: new HttpHeaders(
              {
              'Content-Type': 'application/json',
              })
            }).subscribe( r => {
              observer.next(r);
              observer.complete();
            });
      } catch (e) {
        // observer.error(new Error(e.message));
      } finally {
      }
   });
  }

  listar2(): Observable<any> {
    return new Observable(observer => {
      try { 
       this.http.get <Curso> (
          this.url,
          {
            headers: new HttpHeaders(
              {
              'Content-Type': 'application/json',
              })
            }).subscribe( r => {
              observer.next(r);
              observer.complete();
            });
      } catch (e) {
        // observer.error(new Error(e.message));
      } finally {
      }
    })
  }
 
  listarporId(id): Observable<any> {
    // console.log('id no service', id);
    return new Observable(observer => {
      try { 
       this.http.get <Curso> (
          this.url + id,
          {
            headers: new HttpHeaders(
              {
              'Content-Type': 'application/json',
              })
            }).subscribe( r => {
              observer.next(r);
              observer.complete();
            });
      } catch (e) {
        // observer.error(new Error(e.message));
      } finally {
      }
    })
  }

  delete (id):Observable<any> {
    // console.log('id no service', id);
    return new Observable(observer => {
      try { 
       this.http.delete <Curso> (
          this.url + id,
          {
            headers: new HttpHeaders(
              {
              'Content-Type': 'application/json',
              })
            }).subscribe( r => {
              observer.next(r);
              observer.complete();
            });
      } catch (e) {
        // observer.error(new Error(e.message));
      } finally {
      }
    })
  }

}
