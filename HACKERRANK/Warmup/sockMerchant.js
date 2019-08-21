function sockMerchant(n, ar) {
    let ht = {};
    let count = 0;
  
    for (let i = 0; i < ar.length; i++) {
      if (!ht[ar[i]]) {
        ht[ar[i]] = 1
      } else {
        ht[ar[i]] += 1
      }
    }
  
    for (let sock in ht) {
      if (ht[sock] > 1) {
        count += Math.floor(ht[sock] / 2)
      }
    }
  
    return count;
  }