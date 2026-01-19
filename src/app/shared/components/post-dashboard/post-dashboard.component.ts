import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  editPost !: IPost
  postArr: Array<IPost> =
    [
      {
        "userId": 1,
        "id": "1",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": "2",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": "3",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": "4",
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": "5",
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": "6",
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      }]

  constructor(
    private _snackBar: SnackBarService
  ) { }

  ngOnInit(): void {}

  getNewPost(post: IPost) {
    this.postArr.unshift(post)
    this._snackBar.openSnackbar(`The Post Is Created Successfully !!!`)
  }


  getRemoveId(id:string){
    let getIndex = this.postArr.findIndex(p => p.id === id)
    this.postArr.splice(getIndex, 1)
    this._snackBar.openSnackbar((`Post Removed Successfully !!!`))
  }

  getEditPost(post : IPost){
    this.editPost = post
  }

  getUpdatePost(post:IPost){
    let getIndex = this.postArr.findIndex(p => p.id === post.id)
    this.postArr[getIndex]=post
    this._snackBar.openSnackbar(`The Post Updated Successfully !!!`)
  }

}
