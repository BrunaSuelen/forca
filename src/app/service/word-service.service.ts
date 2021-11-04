import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  public darkMode: Subject<boolean> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<any> {
    return this.http.get(`${environment.base_url}/db.json`);
  }

  public getRandomId(min: number, max: number): number {
    const ID = Math.random() * (max - min) + min;
    return Math.ceil(ID);
  }
}
