import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'
  ,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments=[

    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"Mongo"},
    {"id":4,"name":"React"},

  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(){
    this.router.navigate(['/departments'])
  }

}
