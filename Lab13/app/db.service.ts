import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  students = [
    {_id: 1, name: 'Brian John', stuId: 986044, email: 'brian@yahoo.co,'},
    {_id: 2, name: 'Tom Clifford', stuId: 751123, email: 'tom@gmail.com'},
    {_id: 3, name: 'James Orengo', stuId: 722426, email: 'james@gmail.com'},
    {_id: 4, name: 'Peter Pan', stuId: 78, email: 'peter@gmail.com'},
  ];

  constructor() { }

  getData(){
    return this.students;
  }

  getStudentById(sid:number) {
    return this.students.find( (student) => student.stuId == sid );
  }
}
