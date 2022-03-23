import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = "Unknown";
    this.description = "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET"
    this.createdDate = new Date();
    this.snaps = 7;
    this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfs8BYOLgslj-pexa6WtpgCN8GOps9Ljj1GfuSQv8lR9cM-tYoUCqfS7X_sgqEE3KnfE&usqp=CAU';
    this.buttonText = 'Oh Snap!'
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.snaps++;
      this.buttonText = "Oops, UnSnap!"
    } else {
      this.snaps--;
      this.buttonText = "Oh Snap!";
    }
  }

}
