const object1 = {
    name: 'ABC',
    address: 'India'
  };
      
  const object2 = {
    address: 'India',
    name: 'ABC'
  };
  
  let arr=Object.keys(object1)
  console.log(Object.keys(object2))
  for(i=0;i<Object.keys(object1).length;i++){
      console.log(arr[i])
  }