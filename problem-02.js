function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let character of str.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("vercel")); 


 