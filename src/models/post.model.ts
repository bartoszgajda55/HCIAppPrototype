export class Post {
  id: number = 0;
  title: string;
  description: string;
  pathToImage: string = "assets/post-images/img2.png";
  author: string;

  constructor(id: number, title: string, description: string, pathToImage: string, author: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.pathToImage = pathToImage;
    this.author = author;
  }
}
