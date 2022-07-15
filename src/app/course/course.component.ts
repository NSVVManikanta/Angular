import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  public selectedId: any;
  constructor(private _router: Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id') as string); 
      this.selectedId = id;
    });
  }
onSelect(x: { id: any; }){
  // this._router.navigate(['/course',x.id])  // absolute navigation
  this._router.navigate([x.id],{relativeTo: this._activatedRoute}); // relative navigation
}  // parameter routes
isSelected(x: { id: any; }){
  return x.id === this.selectedId;
}
}
