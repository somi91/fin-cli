import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { IDataTable } from '../models/IDataTable';
import { IRecipe } from '../models/IRecipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }

  public getRecipes(page: number, perPage: number, query: string): Observable<IDataTable> {
    let url = this.apiUrl + `recipes?page=${page}&pageSize=${perPage}`;
    if(query) {
      url = url + `&search=${query}`;
    }
    return this.http.get<IDataTable>(url).pipe(
      map((data: IDataTable) => {
        return data as IDataTable;
      }),
      catchError(err => throwError(err))
    );
  }
  public deleteRecipe(id: number): Observable<IRecipe> {
    let url = this.apiUrl + `recipes/${id}`;
    return this.http.delete<IRecipe>(url).pipe(
      map((data: IRecipe) => {
        return data as IRecipe;
      }),
      catchError(err => throwError(err))
    );
  }
  
}
