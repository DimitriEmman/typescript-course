import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {

  salesPersons: SalesPerson[]= [
   new SalesPerson('AA',"AA","AA",1),
   new SalesPerson("BB","BB","BB",2),
   new SalesPerson("CC","CC","CC",1),
   new SalesPerson("DD","DD","DD",4),
  ]

  email= "dd@fm.com"

  constructor() { }

  ngOnInit(): void {
    console.log (this.salesPersons[0])
  }

}
