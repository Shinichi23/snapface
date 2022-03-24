import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  mySnap!: FaceSnap;
  snapTwo!: FaceSnap;
  snapThree!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "Unknown", 
    "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfs8BYOLgslj-pexa6WtpgCN8GOps9Ljj1GfuSQv8lR9cM-tYoUCqfS7X_sgqEE3KnfE&usqp=CAU',
     new Date(),
     0
    );
    this.snapTwo = new FaceSnap(
      "Unknown", 
    "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfs8BYOLgslj-pexa6WtpgCN8GOps9Ljj1GfuSQv8lR9cM-tYoUCqfS7X_sgqEE3KnfE&usqp=CAU',
     new Date(),
     0
    );
    this.snapThree = new FaceSnap(
      "Unknown", 
    "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfs8BYOLgslj-pexa6WtpgCN8GOps9Ljj1GfuSQv8lR9cM-tYoUCqfS7X_sgqEE3KnfE&usqp=CAU',
     new Date(),
     0
    );
  }
}
