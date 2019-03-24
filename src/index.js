module.exports = function getZerosCount(number, base) {
  var countOfZeros = number;

    for (var i = 2; i <= base; i++) {
        if (base % i === 0) {
            var tempNumb = number;
            var numberQual = 0;
            var countOfNumbInDivide = 0;

            while (base % i === 0) {
                numberQual++;
                base = base / i;
            }

            while (tempNumb > 0) {
                tempNumb = Math.floor(tempNumb / i);
                countOfNumbInDivide += tempNumb;
            }

            countOfZeros = Math.floor(Math.min(countOfZeros, countOfNumbInDivide / numberQual));
        }
    }
    return countOfZeros;
}