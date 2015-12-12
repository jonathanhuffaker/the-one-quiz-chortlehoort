
// In the file named IIFE.js. Write an IIFE that defines a global variable named FruitMaker. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".

var FruitMaker = function() {
	var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];

	return {
		getFruitsArray: function() {
			return fruitArray
		},
		addFruit: function (newFruit) {
			fruitArray.push(newFruit)
			return fruitArray
		}
	}
}();

console.log(FruitMaker.getFruitsArray());
FruitMaker.addFruit("boisenberries");
console.log(FruitMaker.getFruitsArray());
