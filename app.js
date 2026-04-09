import { libraryItem } from "./ResourceStore";
let obj = new libraryItem(101, "Book1", true);
console.log(obj.getDetails());
let libraryItems = [
    new libraryItem(1, "Halloween", true),
    new libraryItem(2, "It ends with us", false),
    new libraryItem(3, "It starts with us", true)
];
function countAvailable(items) {
    let count = 0;
    for (let item of items) {
        if (item.isAvailable) {
            count++;
        }
    }
    return count;
}
let totalAvailable = countAvailable(libraryItems);
console.log("Total Available:", totalAvailable);
