import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public courseId!: number;
  constructor(private _activatedRoute: ActivatedRoute,private _route: Router) { }  //route parameter

  ngOnInit() {
    // let cId = parseInt(this._activatedRoute.snapshot.paramMap.get('id') as string);  //route parameter get param id
    // this.courseId = cId;
    this._activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id') as string); 
      this.courseId = id;
    });
  }
  toPrevious(){
    let previousId = this.courseId - 1;
    this._route.navigate(['/course', previousId])  //Param Map Observable
  }
  toNext(){
    let nextId = this.courseId + 1;
    this._route.navigate(['/course', nextId])  //Param Map Observable
  }
  goBack(){
    let selectedId = this.courseId ? this.courseId : null;
    // this._route.navigate(['/course', {id:selectedId}])  //Param Map Observable // absolute navigation
    this._route.navigate(['../',{id: selectedId}],{relativeTo: this._activatedRoute});
  }
  showDuration(){
    this._route.navigate(['duration'],{relativeTo: this._activatedRoute})
  }
  showFee(){
    this._route.navigate(['fee'],{relativeTo: this._activatedRoute})
  }

}
