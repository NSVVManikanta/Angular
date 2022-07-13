import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public courseId: number | undefined ;
  constructor(private _activatedRoute: ActivatedRoute) { }  //route parameter

  ngOnInit() {
    let cId = parseInt(this._activatedRoute.snapshot.paramMap.get('id') as string);  //route parameter get param id
    this.courseId = cId;
  }

}
