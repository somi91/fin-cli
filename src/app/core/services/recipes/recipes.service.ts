import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDataTable } from '../../models/IDataTable';
import { IRecipe } from '../../models/IRecipe';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private query: string = '';
  public set Query(value: string) {
    this.query = value;
  }
  
  constructor(private api: ApiService) { }

  public getRecipes(page: number, perPage: number): Observable<any> {
    return this.api.getRecipes(page, perPage, this.query).pipe(
      map((data: IDataTable) => {
        return data;
      })
    )
  }

  public deleteRecipe(recipe: IRecipe): Observable<IRecipe> {
    return this.api.deleteRecipe(recipe.id).pipe(
      map((recipe: IRecipe) => {
        window.confirm(`Recipe ${recipe.title} successfully deleted`);
        return recipe;
      })
    )
  }

}
