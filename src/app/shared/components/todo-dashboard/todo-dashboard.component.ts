import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

editTodo !: Itodo

  todoArr: Array<Itodo> = [
    {
      todoItem: "TYPE SCRIPT",
      todoId: "123"
    },
    {
      todoItem: "ANGULAR",
      todoId: "123"
    },
    {
      todoItem: "JAVA SCRIPT",
      todoId: "123"
    }

  ]


  constructor() {}
  ngOnInit(): void {
  }

  getNewTodo(todo : Itodo){
this.todoArr.unshift(todo)
  }


 getEditTodo(todo: Itodo){
   this.editTodo = todo
 }

 getUpdateTodo(todo : Itodo){
   let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId)
 if(getIndex >= 0){
  this.todoArr[getIndex] = todo
 }
 }
}
