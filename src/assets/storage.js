
//step one
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//step two
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

//step three
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

var db; 
var request = window.indexedDB.open("reviews", 1);

request.onerror = function(event){
    console.log("error" + event.target.result)
} 
request.onsuccess = function(event) {
    db = request.result;
    console.log("success" + db)
}

request.onupgradeneeded = function(event){
    var db = event.target.result;
    var objectStore = db.createObjectStore("Reviewsdb")
}