import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit , OnChanges{
  @ViewChild('todoForm') todoForm !: NgForm
  @Input() getEditTodo !: Itodo
 @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
 @Output() emitUpdateTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

 isInEditMode : boolean = false

  constructor() { }
  ngOnInit(): void {
  }

onTodoAdd(){
  if(this.todoForm.valid){
    let todo : Itodo = {
      ...this.todoForm.value,
      todoId : Date.now().toString
    }

    this.todoForm.reset()
    this.emitNewTodo.emit(todo)
  }
}

ngOnChanges(changes: SimpleChanges): void {
  if(!!changes['getEditTodo']['currentValue']){
    this.isInEditMode = true
    this.todoForm.form.patchValue(changes['getEditTodo']['currentValue'])
  }
}

onUpdate(){
if(this.todoForm.valid){
  let update_obj : Itodo = {
    ...this.todoForm.value,
    todoId : this.getEditTodo.todoId
  }

  this.emitUpdateTodo.emit(update_obj)
  this.isInEditMode = false
   this.todoForm.reset()
}
}
}
