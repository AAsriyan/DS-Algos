function jumpingOnClouds(c) {
    let jumps = 0;
  
    for (let i = 0; i < c.length - 1; i++) {
      if (c[i + 2] === 0) {
        jumps++
        i += 1
      } else {
        jumps++
      }
    }
  
    return jumps
  }