/*
 * Create the function factorial here
 */
function factorial(n) {
    return (n < 2) ? 1 : n * factorial(n - 1);
}