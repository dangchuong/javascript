var fetch_data = function () {
  var success = true;
  var dummy_data = {
    name: 'Join',
    birth_date: '1990-02-10 00:00:00',
    util_date: "2021-12-30 00:00:00"
  };
  return new Promise(function (resolve, reject) 
    {
    try 
      {
      if (success)
        return resolve(dummy_data);
      else
        throw "Internal Server Error."
      } 
    catch (error)
      {
      reject(error);
      }
    });
}

fetch_data().then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log(error);
})