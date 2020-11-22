var chatroom_1 = new Set();
chatroom_1.add("user1");
chatroom_1.add("user2");
chatroom_1.add("user3");
var chatroom_2 = new Set();
chatroom_2.add("user4");
chatroom_2.add("user5");
chatroom_2.add("user6");
var map_1 = new Map();
map_1.set("user1", ["hey bro!", "how are you?"]);
map_1.set("user2", ["hello", "fine"]);
map_1.set("user3", ["me too", "cool"]);
var map_2 = new Map();
map_2.set("user4", ["yes", "lets go", "sure!"]);
map_2.set("user5", ["hmm", "where"]);
map_2.set("user6", ["cool!", "u there!", "have a good day!"]);
for (var _i = 0, _a = map_1.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], k = _b[0], v = _b[1];
    console.log(k + " : " + v);
}
for (var _c = 0, _d = map_2.entries(); _c < _d.length; _c++) {
    var _e = _d[_c], k = _e[0], v = _e[1];
    console.log(k + " : " + v);
}
