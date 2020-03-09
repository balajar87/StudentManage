import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {  
  CourseID: number;
  CourseName: string;
  Duration: number;
  Cost: string;
  isedit: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { CourseID: 1, CourseName: 'Designing Course', Duration: 6, Cost: 'H', isedit: false },
  { CourseID: 2, CourseName: 'Designing Course1', Duration: 10, Cost: 'H', isedit: false },
  { CourseID: 3, CourseName: 'Designing Course2', Duration: 15, Cost: 'H', isedit: false },
];

@Component({
  selector: 'app-Courses',
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
