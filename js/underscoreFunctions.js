var arrayname = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function() {
    _.each(arrayname, function(name, key) {
    var index = [];
    index.push(key);
    console.log(index);
    })

}());
