import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  empdtl:any[]=[];
  empID:number;
  empname:string;
  designation:string;
  country:string;
  rating:number;
  angularprof:string;
  searchText:any;
  constructor() { }


 
  ngOnInit(): void {
  }
  AddEmployeeDetails(Value:NgForm){
    console.log(Value.value);
    this.empdtl.push(Value.value);
  }

}
