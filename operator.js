var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice - sellingPrice)/listingPrice)*100;

console.log("Discount is : "+discountPercentage);


displayDiscountPrice = Math.round(discountPercentage);

console.log("You have "+displayDiscountPrice+"% discount");