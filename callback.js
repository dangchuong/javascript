var getData = function (obj, callback) {
  var dummy_data = {
    name: obj.name,
    age: obj.age,
    util_date: "2021-12-30"
  };
  setTimeout(function () {
    return callback(dummy_data);
  }, 3000);
}

getData({
    name: "Join",
    age: 21
}, function(res) {
    console.log(res);
});