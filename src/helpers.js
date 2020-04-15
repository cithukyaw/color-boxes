function choice(ar) {
    const codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const randomArr = shuffle(codes);

    return `#${randomArr.join('').substr(0, 6)}`;
}

function shuffle(arr) {
  return arr.map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}

export { choice, shuffle }
