export default class TaskDto {
<<<<<<< HEAD
    id;
    title;
    subTitle;
    description;
    status
    createdAt;
    constructor(model) {
      (this.id = model._id),
        (this.title = model.title),
        (this.subTitle = model.subTitle),
        (this.description = model.description),
        (this.status = model.status),
        (this.createdAt = model.createdAt);
    }
  }
=======
  id
  title
  checked
  project
  createdAt
  constructor(model) {
    ;(this.id = model._id),
      (this.title = model.title),
      (this.checked = model.checked),
      (this.project = model.project),
      (this.createdAt = model.createdAt)
  }
}
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
