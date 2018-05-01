import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//all the data will be in this empty array.
  public allData = [];

  constructor(public apiHttpService: ApiHttpService) { }

  ngOnInit() {
    console.log("Home Component onInit is called");

    //handling observables response.
    this.apiHttpService.getBooks().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allData = this.allData.concat(data);

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }


    )

    console.log(this.allData);

    //handling observables response
    
    this.apiHttpService.getCharacters().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allData = this.allData.concat(data)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }


    )

    console.log(this.allData);
    
    //handling observables response
    
    this.apiHttpService.getHouses().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allData = this.allData.concat(data)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }


    )

    console.log(this.allData);
  }

  //This will fetch particular id from the URL.

  getItemId(item) {
    let id = item.url.match(/\d+/)[0]
    return id;
  }
  
public search=''

}



