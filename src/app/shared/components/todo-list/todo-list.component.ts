import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoInfo: Array<Itodo> = []
  @Output() emitOnEdit: EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor(
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
  }

  trackById(index: number, item: Itodo) {
    return item.todoId;
  }

  onEdit(todo: Itodo) {
    this.emitOnEdit.emit(todo)
  }

  onRemove(todo: Itodo) {
    let matConfig = new MatDialogConfig()
    matConfig.width = '500px'
    matConfig.disableClose = true
    let MatDialogRef = this._matDialog.open(GetConfirmComponent, matConfig)
    MatDialogRef.afterClosed()
      .subscribe(flag => {
        if (flag) {
          let getIndex = this.todoInfo.findIndex(t => t.todoId === todo.todoId)
          this.todoInfo.splice(getIndex, 1)
          this._snackBar.open(`The Todo Item Removed Successfully`, 'Close', {
            verticalPosition: 'top',
            horizontalPosition: "left",
            duration: 3000
          })
        }
      })
  }

}
