import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  public currentCharacter;
  characId;
  constructor(private _route: ActivatedRoute, private router: Router, public apiHttpService: ApiHttpService, private location: Location) { }

  ngOnInit() {
    console.log("Character view Component onInit is called");

    this.characId = this._route.snapshot.paramMap.get("characId");

    console.log(this.characId);
    //Handling Observable response.
    this.apiHttpService.getCharacterInformation(this.characId).subscribe(
      data => {
        this.currentCharacter = data;
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }

}



