import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  
@Output() emitOnRemove : EventEmitter<string> = new EventEmitter<string>()
  @Input() postInfo !: IPost[]
  @Output() emitEditPost : EventEmitter<IPost> = new EventEmitter<IPost>()
post: any;
  constructor(
    private  _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }


  onRemove(id : string): void{
  const matConfig = new MatDialogConfig();
  matConfig.width = '500px'
  matConfig.disableClose=true
  matConfig.data =`Are You Sure? You Want To Remove This Post?`;

  const matDialogRef = this._matDialog.open(GetConfirmComponent, matConfig);
  matDialogRef.afterClosed().subscribe({
    next: (res : boolean)=>{
      if(res === true){
        this.emitOnRemove.emit(id)
      }
    },
    error: (err : any)=>{
      console.log(err)
    }
  });
  }

  onEdit(post:IPost){
   this.emitEditPost.emit(post)
  }


}
