let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    const p=arr.filter((emp)=>{
        return emp.profession=="developer"
    })
  
    console.log(p);
  }
  
  function addData() {
    //Write your code here, just console.log
    const add=({id:4, name:"susan", age:"20", profession:"intern"});
    arr.push(add);
    console.log(add);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const remadmin=arr.filter((emp)=>{
        return emp.profession!="admin";
    })
    console.log(remadmin);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 4, name: "mike", age: "18", profession: "developer" },
        { id: 5, name: "morris", age: "20", profession: "developer" },
        { id: 6, name: "bat", age: "19", profession: "admin" },
      ];
      const newArr = arr.concat(arr2)
      console.log(newArr)
    }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }