import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  snapTwo!: FaceSnap;
  snapThree!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [{
      title: "Unknown", 
      description: "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET",
      imageUrl: 'https://images.unsplash.com/photo-1602764363500-e8e8455de955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      createdDate: new Date(),
      snaps: 0,
      location: "Kyoto"
    },
    {
      title: "Unknown", 
      description: "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET",
      imageUrl: 'https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      createdDate: new Date(),
      snaps: 0,
      location: "La foret"
    },
    {
      title: "Unknown", 
      description: "My unknown situation is unknown, shoud be know ? don't think so ! let it be SECRET",
      imageUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      createdDate: new Date(),
      snaps: 0
    }
  ];
  }
}
