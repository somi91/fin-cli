import { Component } from '@angular/core';
import { IDataTable } from './core/models/IDataTable';
import { IRecipe } from './core/models/IRecipe';
import { RecipesService } from './core/services/recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fin-cli';
  tableData?: IDataTable;
  perPage = 5;

  constructor(private recipesSrv: RecipesService) {
    this.recipesSrv.getRecipes(1, 5).subscribe((data: IDataTable) => {
      this.tableData = data;
    });
  }

  public onGetDataEvent(event: {page: number, perPage: number}) {

    this.recipesSrv.getRecipes(event.page, event.perPage).subscribe((data: IDataTable) => {
      this.tableData = data;
    });
  }

  public onSearch(query: string) {
    // console.log('on search', query);
    this.recipesSrv.Query = query;
    this.onGetDataEvent({page: 1, perPage: this.perPage});
  }

  public onRowClickEvent(event: IRecipe) {
    this.recipesSrv.deleteRecipe(event).subscribe((data: IRecipe) => {
      if(this.tableData) {
        this.onGetDataEvent({
          page: this.tableData.recipes.length > 1 ? this.tableData.currentPage : this.tableData.currentPage - 1,
          perPage: this.perPage
        });
      }
    })
  }
}
