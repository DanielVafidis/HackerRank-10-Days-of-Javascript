/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let cnt = 0;
    objects.map(el => (el.x === el.y) ? cnt++ : false);
    return cnt;
}