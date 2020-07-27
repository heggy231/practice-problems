function phAnalyzer(ph) {
  if (ph === 7) {
    return "neutral";
  } else if (ph >= 0 && ph <= 6) {
    return "acid";
  } else if (ph >= 8 && ph <= 14) {
    return "alkaline";
  } else {
    return "invalud pH value";
  }
}
