import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplyoee-list',
  templateUrl: './employee-list.component.html'
    
  ,
  styles: [
  ]
})
export class EmplyoeeListComponent implements OnInit {


  searchText:any;
  employees=[
    {id:1,name:'Rahul',designation:'Software Tester',country:'India'},
    {id:2,name:'Rushikesh',designation:'Software Engineer',country:'America'},
    {id:3,name:'Nilesh',designation:'Quality Assurance',country:'London'},
    {id:4,name:'Vishal',designation:'Software Engineer',country:'Canada'},
    {id:5,name:'Saurabh',designation:'Technical lead',country:'Africa'},

  ];
  // @Input() employee:any=[];

  constructor() { }

  ngOnInit(): void {

    console.log("hello")
  }

}
