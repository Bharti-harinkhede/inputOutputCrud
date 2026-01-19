import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/student';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
 editStd !: Istd

  stdArr: Array<Istd> = [
    {
      fname: 'John',
      lname: 'Doe',
      email: 'JD@gmail.com',
      contact: 124859494,
      stdId: '123'
    },
    {
      fname: 'June',
      lname: 'Doe',
      email: 'JuneD@gmail.com',
      contact: 124859494,
      stdId: '123'
    },
    {
      fname: 'May',
      lname: 'strimls',
      email: 'MSRD@gmail.com',
      contact: 124859494,
      stdId: '123'
    }
  ]

  constructor(
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {}

  getNewStd(std: Istd){
  this.stdArr.unshift(std)
  this._snackBar.openSnackbar(`The Student Data Created Successfully !!!`)
  }

  getRemoveStd(id: string){
    let getIndex = this.stdArr.findIndex(s => s.stdId === id)
    this.stdArr.splice(getIndex, 1)
    this._snackBar.openSnackbar(`The Students Data Removed Successfully !!!`)
  }

getEditStd(std : Istd){
this.editStd = std
}

getUpdateStd(std: Istd){
let getIndex = this.stdArr.findIndex(s => s.stdId === std.stdId)
this.stdArr[getIndex] = std
this._snackBar.openSnackbar(`The Students Data Updated Successfully !!!`)
}
}
