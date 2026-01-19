import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IPost } from '../../models/post';
import { UuidService } from '../../services/uuid.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {
@Output() emitNewPost : EventEmitter<IPost> = new EventEmitter<IPost>()
isInEditMode : boolean = false
@ViewChild('postForm') postForm!: NgForm
@Input() EditPostObj !: IPost
@Output() emitUpdatePost : EventEmitter<IPost> = new EventEmitter<IPost>()
  constructor(
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
  }

  onPostAdd(){
  if(this.postForm.valid){
    let post_obj : IPost = {
      ...this.postForm.value,
      id : this._uuidService.uuid()
    } 
    this.postForm.reset()
    this.emitNewPost.emit(post_obj)
    
  }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['EditPostObj']['currentValue']){
      this.isInEditMode = true
      this.postForm.form.patchValue(changes['EditPostObj']['currentValue'])
    }
  }

  onUpdate(){
     if(this.postForm.valid){
      let updated_Obj : IPost = {
        ...this.postForm.value,
        id : this.EditPostObj.id
      }
      this.emitUpdatePost.emit(updated_Obj)
      this.isInEditMode = false
      this.postForm.reset()
     }
  }



}
