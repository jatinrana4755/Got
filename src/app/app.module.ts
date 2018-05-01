import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiHttpService } from './api-http.service';
import { HttpClientModule } from '@angular/common/http';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([

      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'book/:id', component: BookViewComponent },
      { path: 'character/:characId', component:CharacterViewComponent },
      { path: 'house/:houseId', component:HouseViewComponent },

    ])
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
