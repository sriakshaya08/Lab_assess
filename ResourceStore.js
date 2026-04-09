export let ResourceMeta;
export class libraryItem {
    resourceid;
    title;
    isAvailable;
    constructor(resourceid, title, isAvailable) {
        this.resourceid = resourceid;
        this.title = title;
        this.isAvailable = isAvailable;
    }
    getDetails() {
        return `ID: ${this.resourceid}, Title: ${this.title}, Available: ${this.isAvailable}`;
    }
}
export class DigitalResearchPaper extends libraryItem {
    constructor(resourceid, title, isAvailable) {
        super(resourceid, title, isAvailable);
    }
}
