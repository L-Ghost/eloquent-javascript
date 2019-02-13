
generateTriangle = (n, ch) => {
    let triangle = "";
    for (let i = 1; i <= n; i++) {
        triangle += ch.repeat(i);
        if (i != n) triangle += "\n"; // do not add new line to last line
    }
    return triangle;
}
