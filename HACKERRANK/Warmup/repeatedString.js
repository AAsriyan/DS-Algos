function repeatedString(s, n) {
    let occurances = (s.split("a").length - 1);
    let max = Math.floor(n / s.length);
    let repeats = occurances * max;
    
    repeats += (s.slice(0, n % s.length).split("a").length - 1);
    return repeats;
  }