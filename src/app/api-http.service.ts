import { Injectable } from '@angular/core';
//impotrting http client to make the requests.

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code.
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()

export class ApiHttpService {


  constructor(public _http: HttpClient) {

    console.log("api-http service was called");
  }
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all Blogs.
  public getBooks(): any {
    let myResponse = this._http.get("https://www.anapioficeandfire.com/api/books");
    console.log(myResponse);
    return myResponse;

  }

  public getCharacters(): any {
    let myResponse = this._http.get("https://www.anapioficeandfire.com/api/characters");
    console.log(myResponse);
    return myResponse;

  }
  public getHouses(): any {
    let myResponse = this._http.get("https://www.anapioficeandfire.com/api/houses");
    console.log(myResponse);
    return myResponse;

  }

  public getBookInformation(id) {
    let myResponse = this._http.get(`https://anapioficeandfire.com/api/books/${id}`)
    return myResponse;
  }
  public getCharacterInformation(characId) {
    let myResponse = this._http.get(`https://anapioficeandfire.com/api/characters/${characId}`)
    return myResponse;
  }
  public getHouseInformation(houseId) {
    let myResponse = this._http.get(`https://anapioficeandfire.com/api/houses/${houseId}`)
    return myResponse;
  }
}
