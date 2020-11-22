let chatroom_1 = new Set();
chatroom_1.add("user1");
chatroom_1.add("user2");
chatroom_1.add("user3");

let chatroom_2 = new Set();
chatroom_2.add("user4");
chatroom_2.add("user5");
chatroom_2.add("user6");

let map_1 = new Map();
map_1.set("user1", ["hey bro!","how are you?"]);
map_1.set("user2", ["hello", "fine"]);
map_1.set("user3", ["me too", "cool"]);

let map_2 = new Map();
map_2.set("user4", ["yes", "lets go", "sure!"]);
map_2.set("user5", ["hmm",  "where"]);
map_2.set("user6", ["cool!", "u there!", "have a good day!"]);

for(let [k,v] of map_1.entries()){
  console.log(`${k} : ${v}`);
  
}

for(let [k,v] of map_2.entries()){
  console.log(`${k} : ${v}`);
  
}