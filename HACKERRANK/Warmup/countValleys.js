function countingValleys(n, s) {
    let alt = 0;
    let valleys = 0;
    let inValley = false;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === "D") {
        alt++;
      } else {
        alt--;
        if (alt === 0) valleys++
      }
    }
    return valleys;
  }