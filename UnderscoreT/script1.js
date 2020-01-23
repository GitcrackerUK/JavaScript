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

    // 2. first, last, initial, rest
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];

    var first = document.getElementById('first');
    var last = document.getElementById('last');
    var initial = document.getElementById('initial');
    var rest = document.getElementById('rest');

    first.innerHTML = _.first(arr);
    last.innerHTML = _.last(arr);
    initial.innerHTML = _.initial(arr,3);
    rest.innerHTML = _.rest(arr,3);

    // 2. pick, omit, keys, values
    var pick = document.getElementById('pick');
    var omit = document.getElementById('omit');
    var keys = document.getElementById('keys');
    var values = document.getElementById('values');















});
