import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
      {
        id: 1,
        title: "Unknown screen waves", 
        description: "My unknown situation is unknown, shoud be known ? don't think so ! let it be a SECRET",
        imageUrl: 'https://images.unsplash.com/photo-1602764363500-e8e8455de955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        createdDate: new Date(),
        snaps: 0,
        location: "Kyoto"
      },
      {
        id: 2,
        title: "Unknown green life", 
        description: "My unknown situation is unknown, shoud be known ? don't think so ! let it be a SECRET",
        imageUrl: 'https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdDate: new Date(),
        snaps: 0,
        location: "La foret"
      },
      {
        id: 3,
        title: "Unknown style chain", 
        description: "My unknown situation is unknown, shoud be known ? don't think so ! let it be a SECRET",
        imageUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdDate: new Date(),
        snaps: 0
      },
      {
        id: 4,
        title: "Unknown screen waves", 
        description: "My unknown situation is unknown, shoud be known ? don't think so ! let it be a SECRET",
        imageUrl: 'https://images.unsplash.com/photo-1602764363500-e8e8455de955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        createdDate: new Date(),
        snaps: 0,
        location: "Kyoto"
      },
      {
        id: 5,
        title: "Unknown green life", 
        description: "My unknown situation is unknown, shoud be known ? don't think so ! let it be a SECRET",
        imageUrl: 'https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdDate: new Date(),
        snaps: 0,
        location: "La foret"
      },
      {
        id: 6,
        title: "Unknown style chain", 
        description: "My unknown situation is unknown, shoud be known ? don't think so ! let it be a SECRET",
        imageUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdDate: new Date(),
        snaps: 0
      }
    ];

    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnap) {
          throw new Error('FaceSnap not found!');
      } else {
          return faceSnap;
      }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
      const faceSnap = this.getFaceSnapById(faceSnapId)
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}