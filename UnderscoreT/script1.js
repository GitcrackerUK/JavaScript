window.addEventListener("load", function() {
    // 1. union , intersection, difference and without
    var array = [1, 2, 3, 4, 5, 6, 7, 8];
    var array2 = [1, 2, 'A', 'B', 'C', 'D', 'E'];

    var union = document.getElementById('union');
    var intersection = document.getElementById('intersection');
    var diff = document.getElementById('diff');
    var without = document.getElementById('without');

    union.innerHTML = _.union(array, array2);
    intersection.innerHTML = _.intersection(array, array2);
    diff.innerHTML = _.difference(array, array2);
    without.innerHTML = _.without(array2, 'A','C');



});
