import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListViewComponent } from './list-view.component';

const dataTable = {
  "currentPage": 1,
  "totalPages": 5,
  "recipes": [
    {
      "title": "Shakshuka flatbread bake",
      "description": "Heat the oil in a medium pan and fry the onions, garlic, bay leaf and chilli for 3 mins. Add the cumin, paprika and cayenne, season, then cook for a further 3 mins. Add the pepper and cook for 5 mins until it starts to soften.\n\nAdd the chopped tomatoes and stock, lower the heat and simmer for 20-25 mins until you have a thick ragu, then stir in the finely chopped coriander.\n\nHeat oven to 180C/160C fan/gas 4. Lay each flatbread on a baking tray. Put half the vegetable mix in the centre of each and spread it out a bit, keeping at least an inch spare all the way around as a border. Make a small well in the centre and crack an egg on top of each flatbread. Crumble over the feta and put in the oven for 12-15 mins until the egg is set and the cheese melted slightly. Scatter over the remaining coriander and serve.",
      "ingredients": [
        {
          "name": "olive oil for frying",
          "amount": 1,
          "unit": "teaspoon"
        },
        {
          "name": "small onion",
          "amount": 1
        },
        {
          "name": "garlic cloves",
          "amount": 2
        },
        {
          "name": "bay leaf",
          "amount": 1
        },
        {
          "name": "stems with leaves of coriander",
          "amount": 3
        },
        {
          "name": "red chilly, chopped",
          "amount": 1
        },
        {
          "name": "cumin seeds",
          "amount": 1,
          "unit": "teaspoon"
        },
        {
          "name": "smoked paprika",
          "amount": 1,
          "unit": "teaspoon"
        },
        {
          "name": "cayenne peper",
          "amount": 1,
          "unit": "pinch"
        },
        {
          "name": "red pepper, deseeded and sliced",
          "amount": 1
        },
        {
          "name": "can chopped tomatoes",
          "amount": 400,
          "unit": "g"
        },
        {
          "name": "vegetable stock",
          "amount": 200,
          "unit": "ml"
        }
      ],
      "id": 1,
      "created": "2018-11-09T16:35:03.922Z",
      "modified": "2018-11-09T16:35:03.922Z"
    },
    {
      "title": "Crock Pot Roast",
      "description": "Place beef roast in crock pot.\n\nMix the dried mixes together in a bowl and sprinkle over the roast.\n\nPour the water around the roast.\n\nCook on low for 7-9 hours.",
      "ingredients": [
        {
          "name": " beef roast",
          "amount": 1
        },
        {
          "name": "brown gravy mix",
          "amount": 1
        },
        {
          "name": "dried Italian salad dressing mix",
          "amount": 1
        },
        {
          "name": "dry ranch dressing mix",
          "amount": 1
        },
        {
          "name": "water",
          "amount": 0.5,
          "unit": "cup"
        }
      ],
      "id": 2,
      "created": "2018-11-12T12:06:36.944Z",
      "modified": "2018-11-12T12:06:36.944Z"
    },
    {
      "title": "Roasted Asparagus",
      "description": "Preheat oven to 425°F.\n\nCut off the woody bottom part of the asparagus spears and discard.\n\nWith a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).\n\nPlace asparagus on foil-lined baking sheet and drizzle with olive oil.\n\nSprinkle with salt.\n\nWith your hands, roll the asparagus around until they are evenly coated with oil and salt.\n\nRoast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.\n\nThey should be tender when pierced with the tip of a knife.\n\nThe tips of the spears will get very brown but watch them to prevent burning.\n\nThey are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.",
      "ingredients": [
        {
          "name": " asparagus",
          "amount": 500,
          "unit": "g"
        },
        {
          "name": "olive oil",
          "amount": 1.5,
          "unit": "teaspoon"
        },
        {
          "name": "kosher salt",
          "amount": 1,
          "unit": "teaspoon"
        }
      ],
      "id": 3,
      "created": "2018-11-12T12:06:48.957Z",
      "modified": "2018-11-12T12:06:48.957Z"
    },
    {
      "title": "Curried Lentils and Rice",
      "description": "Bring broth to a low boil.\n\nAdd curry powder and salt.\n\nCook lentils for 20 minutes.\n\nAdd rice and simmer for 20 minutes.\n\nEnjoy!",
      "ingredients": [
        {
          "name": "beef broth",
          "amount": 2.5,
          "unit": "dl"
        },
        {
          "name": "dried green lentils",
          "amount": 1,
          "unit": "cup"
        },
        {
          "name": "basmati rice",
          "amount": 0.5,
          "unit": "cup"
        },
        {
          "name": "curry powder",
          "amount": 1,
          "unit": "teaspoon"
        },
        {
          "name": "salt",
          "amount": 1,
          "unit": "teaspoon"
        }
      ],
      "id": 4,
      "created": "2018-11-12T12:06:58.854Z",
      "modified": "2018-11-12T12:06:58.854Z"
    },
    {
      "title": "Big Night Pizza",
      "description": "Add hot water to yeast in a large bowl and let sit for 15 minutes.\n\nMix in oil, sugar, salt, and flour and let sit for 1 hour.\n\nKnead the dough and spread onto a pan.\n\nSpread pizza sauce and sprinkle cheese.\n\nAdd any optional toppings as you wish.\n\nBake at 400 deg Fahrenheit for 15 minutes.\n\nEnjoy!",
      "ingredients": [
        {
          "name": "yeast",
          "amount": 5,
          "unit": "teaspoon"
        },
        {
          "name": "flour",
          "amount": 5,
          "unit": "cup"
        },
        {
          "name": "vegetable oil",
          "amount": 4,
          "unit": "tablespoon"
        },
        {
          "name": "sugar",
          "amount": 2,
          "unit": "tablespoon"
        },
        {
          "name": "salt",
          "amount": 2,
          "unit": "teaspoon"
        },
        {
          "name": "hot water",
          "amount": 2,
          "unit": "cup"
        },
        {
          "name": "pizza sauce",
          "amount": 0.25,
          "unit": "cup"
        },
        {
          "name": "mozzarella cheese",
          "amount": 0.75,
          "unit": "cup"
        }
      ],
      "id": 5,
      "created": "2018-11-12T12:07:06.776Z",
      "modified": "2018-11-12T12:07:06.776Z"
    }
  ]
};
describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    component.key = 'recipes';
    component.listData = dataTable;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should show 5 elements`, () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect((compiled.querySelectorAll('.row')).length).toEqual(5);
  });

  it(`should show 5 navigation pages`, () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect((compiled.querySelectorAll('.button')).length).toEqual(5);
  });

});
