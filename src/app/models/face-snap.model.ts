// Méthode plus simple.

export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;
}

/* 

export class faceSnap {
    title: string;
    description: string;
    imageUrl: string;
    createdDate: Date;
    snaps: number;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;
    }
}
*/