# node-express
Simple Node server using Express and json-file

# Steps
Run following commands

```
cd node-server
npm install
npm start
```

# Test

User curl or any other tool to perform following requests

```
curl http://localhost:8090/api/users -v
```

Result should be:

```
[
    {
        id: 1,
        name: "Foo"
    },
    {
        id: 2,
        name: "Bar"
    }
]
```
