import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';




@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers:[Location]

})
export class BookViewComponent implements OnInit {
public  currentBook;
public   id;
  
  

  
  constructor(private _route:ActivatedRoute,private router:Router ,public apiHttpService:ApiHttpService,private location:Location) { }

  ngOnInit() {
    console.log("Book view Component onInit is called");

    this.id= this._route.snapshot.paramMap.get("id");

    console.log(this.id)
    //Handling Observables response.
    this.apiHttpService.getBookInformation(this.id).subscribe(
      data => {
        this.currentBook= data;
      }, 
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  public goBackToPreviousPage():any{
    this.location.back();
  }
 

}
