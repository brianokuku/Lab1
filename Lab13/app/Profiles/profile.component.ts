import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from './../db.service';
import { IStudents } from '../students/students.model';

@Component({
  selector: 'app-profile',
  template: `
    <div class="card">
      
      <h1>{{student.name}}</h1>
      <p class="title">{{student.email}}</p>      
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  
  
  id: number;
  student: IStudents;
  studentid: number;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private studentService: DbService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
    this.studentid = activatedRoute.snapshot.params['id'];
    this.student = this.studentService.getStudentById(this.studentid);
    
  }

  ngOnInit() {
  }

  ngOnDestory(){
    this.subscription.unsubscribe();
  }

}
