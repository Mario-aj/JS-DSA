function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);

  countDown(--num);
}

countDown(5);
console.log("===============================");
countDown(10);
