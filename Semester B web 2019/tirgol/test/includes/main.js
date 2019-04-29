
console.log(d3.merge([[1,2,3],["x","y"]]));

var map = d3.map(["foo", {name: "bar"}, {number: "foo"}], function(a) { return a.name; });
console.log(map.get("foo")); // {"name": "foo"}
console.log(map.get("bar")); // {"name": "bar"}
console.log(map.get("baz")); // undefined

