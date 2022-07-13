import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students : any[]= [];
  public errMsg: any;
  constructor(private _stdService: StudentService) { }

  ngOnInit() {
    this._stdService.getStudents()
    .subscribe(data => this.students = data,
               error => this.errMsg = error );
  }

}
