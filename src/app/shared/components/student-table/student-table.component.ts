import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() stdInfo !: Istd[]
  @Output() emitOnRemove = new EventEmitter<string>()
  @Output() emitEditStd = new EventEmitter<Istd>()


  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onEdit(std: Istd) {
    this.emitEditStd.emit(std)
  }


  onRemove(stdId: string) {
    const matConfig = new MatDialogConfig()
    matConfig.width = '500px'
    matConfig.disableClose = true
    const matDialogRef = this._matDialog.open(GetConfirmComponent, matConfig)
    matDialogRef.afterClosed().subscribe({
      next: (res: boolean) => {
        if (res === true) {
          this.emitOnRemove.emit(stdId)
        }
      },

      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
