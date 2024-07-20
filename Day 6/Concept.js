const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=>{
    return num > 4 //we have to explicitly use return 
})

const newNums1 = myNums.filter((num)=> num > 4) // we dont need to use return bcz of curlibraces

const newNums2 = [];

myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})


console.log(newNums);
console.log(newNums1);
console.log(newNums2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Fantasy', publish: 2001, edition: 2005 },
    { title: 'Book Nine', genre: 'Biography', publish: 1995, edition: 2000 },
    { title: 'Book Ten', genre: 'Science Fiction', publish: 2010, edition: 2015 },
    { title: 'Book Eleven', genre: 'Romance', publish: 1998, edition: 2003 },
    { title: 'Book Twelve', genre: 'Thriller', publish: 1985, edition: 1991 },
    { title: 'Book Thirteen', genre: 'Adventure', publish: 1990, edition: 1997 },
    { title: 'Book Fourteen', genre: 'Mystery', publish: 2003, edition: 2009 },
    { title: 'Book Fifteen', genre: 'Drama', publish: 1983, edition: 1988 },
    { title: 'Book Sixteen', genre: 'Horror', publish: 1975, edition: 1980 },
    { title: 'Book Seventeen', genre: 'Self-Help', publish: 1997, edition: 2001 },
    { title: 'Book Eighteen', genre: 'Poetry', publish: 2000, edition: 2004 },
    { title: 'Book Nineteen', genre: 'Memoir', publish: 1996, edition: 2002 },
    { title: 'Book Twenty', genre: 'Cookbook', publish: 2011, edition: 2016 },
  ];
  
  let myBooks = books.filter((bk)=> bk.genre === "History")

  myBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'Poetry'
  })
  console.log(myBooks);

// Another Example

  const myArray = [1,2,3,4,5,6,7,8,9];

  const newArray = myArray.map((num) => {
   return num + 10
  })

  console.log(newArray);


//   Chaining concept 

const newArr = myArray
 .map((num) => num + 10)
 .map((num) => num *40)
 .filter((num) => num >= 400)

console.log(newArr);

// Reduce concept 

const myNums2 = [1,2,3,4]

// const total = myNums2.reduce((acc,carValue) => {
//     console.log(`acc :${acc} curVlaue :${carValue}`);
//     return acc + carValue
// },3)

const total = myNums2.reduce((acc,value) => acc + value, 3)

const shopingCart = [

    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "web dev course",
        price:3999
    },
    {
        itemName: "mobile dev course",
        price:2999
    },
    {
        itemName: "data science course",
        price:12999
    },
]

const priceToPay = shopingCart.reduce((acc,item) => acc + item.price ,0)

console.log(priceToPay);
console.log(total);
/*  Note=>

    Foreach=> 1) this loop does not return value

   Filter=> 1) I this loop return depends on the curlibraces. If we use curlibraces , we will get the value otherwise we don't get the value 

   Chaining concept => In the chining concept, The condition is apply one after one condition

   2) in the chaining, there is no limit of applying the condition we can apply the condition as we want

   Reduce==>
    1)
  
 */