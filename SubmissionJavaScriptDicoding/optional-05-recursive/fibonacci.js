function fibonacci(n) {
  const fibonacciArray = [0];

  if(n == 0) {
    return fibonacciArray;
  }

  fibonacciArray.push(1);
  
  for (let i = 2; i <= n; i++) {
    const nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextNumber);
    }

  return fibonacciArray;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
