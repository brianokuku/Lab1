import { Component } from '@angular/core';
import {HttpClient, Response, RequestOptions, Headers} from '@angular/common/http';
import { DataService } from './data.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})

export class DataDrivenComponent {
  myForm: FormGroup;
  loading: boolean;
  data: Object;


  constructor(private formBuilder: FormBuilder, private data:DataService) {

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['', [Validators.required]],
        'post': ['', [Validators.required, Validators.minLength(10)]],
        'email': ['', [Validators.required]]
      })
    });

  }

  onSubmit() {
    console.log(this.myForm);
    //redirect the user here once completed
  }

  makeRequest(){
    this.data.getData().subscribe(
      res=>{
        console.log(res);
        //Username is res.username
        //Email is res.email       
      }
    );
    this.data.getPosts().subscribe(
      posts=>{
        console.log(posts[0].body);
      });
  }

}
