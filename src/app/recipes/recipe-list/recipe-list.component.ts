import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is a sample', 
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F4%2F0%2Fe%2F902530-free-download-chicken-wallpapers-2048x1168-for-ipad-2.jpg&f=1&nofb=1&ipt=6139fad679f69eff9e814209f7b2e1b6c83e7a8c991a931e3fc7876a2de728aa&ipo=images'
    ),
    new Recipe(
      'Second Recipe',
      'This is a sample', 
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F4%2F0%2Fe%2F902530-free-download-chicken-wallpapers-2048x1168-for-ipad-2.jpg&f=1&nofb=1&ipt=6139fad679f69eff9e814209f7b2e1b6c83e7a8c991a931e3fc7876a2de728aa&ipo=images'
    )
  ];
    
  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSent.emit(recipe)
  }
}
