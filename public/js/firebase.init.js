angular.module('firebaseConfig', ['firebase'])

.run(function(){

    var config = {
    apiKey: "AIzaSyBit7HcypP1LtY7n2ijXNu2IPuXlMy3-Zw",
    authDomain: "mycity-dfcc2.firebaseapp.com",
    databaseURL: "https://mycity-dfcc2.firebaseio.com",
    storageBucket: "mycity-dfcc2.appspot.com",
    messagingSenderId: "463188670903"
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/
