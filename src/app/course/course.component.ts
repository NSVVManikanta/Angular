import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "React"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "Bootstrap"},
    {"id": 5, "name": "MongoDB"},
  ]; //parameter Routing
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
onSelect(x: { id: any; }){
  this._router.navigate(['/course',x.id])
}  // parameter routes
}
