# Golang + Rethinkdb (No .go file provided now)


### Quick start
```sh
docker-compose up --build -d

# shut down
docker-compose down
```


### Connection in .go file

```go
// Rethinkdb
func Dbini() {
  Port         := "rethinkdb:28015" // here specify name of service name and its port from docker-compose file
  fmt.Println("Retinkdb conect to ", Port)
  
  // Conndb       := r.ConnectOpts{Address: "localhost:28015", Database: "test", Username:"admin", Password: ""}
  Conndb       := r.ConnectOpts{Address: Port, Database: "test"}
  session, err := r.Connect(Conndb)

  // Обработка ошибок
  if err != nil {
     // fmt.Println("NO CONNECTION.")
     fmt.Println(err.Error())
     return
  }

  // Максимальное количество подключений
  // По умолчанию 200
  session.SetMaxOpenConns(200)
  session.SetMaxIdleConns(200)
  sessionArray = append(sessionArray, session)
}
```

