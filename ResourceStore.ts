export interface IResource {
    resourceid: number;
    title: string;
    isAvailable: boolean;
}

export let ResourceMeta: [number, number];

export class libraryItem implements IResource {
    resourceid: number;
    title: string;
    isAvailable: boolean;

    constructor(resourceid: number, title: string, isAvailable: boolean) {
        this.resourceid=resourceid;
        this.title=title;
        this.isAvailable=isAvailable;
    }

    getDetails(): string {
        return `ID: ${this.resourceid}, Title: ${this.title}, Available: ${this.isAvailable}`;
    }
}


 class DigitalResearchPaper extends libraryItem{
    constructor(resourceid: number, title: string, isAvailable: boolean) {
        super(resourceid, title, isAvailable);
        
    }
}