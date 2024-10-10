export default class TaskDto {
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