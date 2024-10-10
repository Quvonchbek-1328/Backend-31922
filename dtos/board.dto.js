export default class BoardDto {
<<<<<<< HEAD
  id;
  boardTitle;
  collaborators;
  createdAt;
  constructor(model) {
    (this.id = model._id),
      (this.board_title = model.boardTitle),
      (this.collaborators = model.collaborators),
      (this.createdAt = model.createdAt);
=======
  id
  title
  users
  projects
  createdAt
  constructor(model) {
    ;(this.id = model._id),
      (this.title = model.title),
      (this.users = model.users),
      (this.projects = model.projects),
      (this.createdAt = model.createdAt)
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
  }
}
