export default class BoardDto {
  id;
  boardTitle;
  collaborators;
  createdAt;
  constructor(model) {
    (this.id = model._id),
      (this.board_title = model.boardTitle),
      (this.collaborators = model.collaborators),
      (this.createdAt = model.createdAt);
  }
}
