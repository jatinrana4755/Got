import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';



@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public currentHouse;
  public houseId

  constructor(private _route: ActivatedRoute, private router: Router, public apiHttpService: ApiHttpService, private location: Location) { }

  ngOnInit() {
    console.log("Character view Component onInit is called");

    this.houseId = this._route.snapshot.paramMap.get("houseId")

    console.log(this.houseId)

    this.apiHttpService.getHouseInformation(this.houseId).subscribe(
      data => {
        this.currentHouse = data;
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


