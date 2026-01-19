import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/student';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false

  @ViewChild('stdForm') stdForm!: NgForm
  @Output() emitNewStd: EventEmitter<Istd> = new EventEmitter<Istd>()
  @Input() editStdObj !: Istd
  @Output() emitUpdateStd: EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor(
    private _uuidService: UuidService
  ) { }

  ngOnInit(): void {
  }

  onStdAdd() {
    if (this.stdForm.valid) {
      let stdObj: Istd = {
        ...this.stdForm.value,
        stdId: Date.now().toString()
      }
      this.stdForm.resetForm()
      this.emitNewStd.emit(stdObj)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editStdObj']['currentValue']) {
      this.isInEditMode = true
      this.stdForm.form.patchValue(changes['editStdObj']['currentValue'])

    }
  }

  onUpdate() {
    if (this.stdForm.valid) {
      let updated_obj: Istd = {
        ...this.stdForm.value,
        stdId: this.editStdObj.stdId
      }
      this.emitUpdateStd.emit(updated_obj)
      this.isInEditMode = false
      this.stdForm.reset()
    }
  }

}
