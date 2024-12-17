// polly fill groupBy
function groupBy(array, callback) {
  return array.reduce((acc, currentValue)=>{
      // determine the group key using callback function
      const key = callback(currentValue)

      // initialize the group if it does not exit
      if(!acc[key]){
          acc[key] =[]
      }
      acc[key].push(currentValue)
      return acc
  }, {})
}
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
  { name: "Eve", age: 30 }
];
const numbers = [1, 2, 3, 4, 5, 6];
const groupByNumber = groupBy(numbers, (num)=>(num%2 ===0 ?'even':'odd'))
const groupByage = groupBy(people, (person=>person.age))


//TO-DO : Create deep copy functions for polyfill 

// Create function for deep copy 
function deepcopy(obj) {
  if(obj === null || typeof obj !== undefined) {
      return obj
  }


  const copy = {}
  for(let key in obj) {
      if(obj.hasOwnProperty(key)){
          copy[key] = deepcopy(obj[key]) // recursively copy each property
      }
  }
  return copy
}