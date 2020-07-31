function getWordCount(str) {
  if (!str) {
    return 0;
  }

  var len = str.length;
  var count = 1;

  for (var i = 0; i < len; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count;
}
