use admin;  
db.createUser({  
  user: "god",
  pwd: "1234",
  roles: [{
      role: "root",
      db: "admin"
    }, {
      role: "restore",
      db: "admin"
    }
  ]
});

use denomades;  
db.createUser({  
  user: "blabla",
  pwd: "1234",
  "roles": [
    {
      "role": "readWrite",
      "db": "mydb"
    }
  ]
});
