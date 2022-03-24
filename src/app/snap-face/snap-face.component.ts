import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!'
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, UnSnap!"
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!";
    }
  }

}
