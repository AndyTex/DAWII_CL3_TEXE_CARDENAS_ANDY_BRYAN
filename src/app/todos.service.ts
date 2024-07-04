import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Todo } from './pregunta03/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getFilteredTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      map(todos => todos.filter(todo => todo.id >= 25 && todo.id <= 90 && todo.completed))
    );
  }
}
