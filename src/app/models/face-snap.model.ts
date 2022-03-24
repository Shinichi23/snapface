// Méthode plus simple.

export class FaceSnap {

    constructor(

            public title: string, 
            public description: string, 
            public imageUrl: string, 
            public createdDate: Date, 
            public snaps: number)
            {}
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