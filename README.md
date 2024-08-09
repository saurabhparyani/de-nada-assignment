# This is the assignment for De Nada Tecnologia

## 1. Clone the repo
```git clone https://github.com/saurabhparyani/de-nada-assignment```

```cd <directory_name>```

## 2. Install dependencies
```npm install```

## 3. Configure the app
Create a .env file in the root of the application and paste the following: 

```
PORT=8000
MONGO_URI=mongodb+srv://saurabhparyani64:DT1U0Fl6NwMxfz7Q@cluster0.xvupo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```


## 4. Start the server
```npm start``` in the terminal


# How things work
So I've created a simple Node, Express and TS app where I've created 2 tables. One for the inventory and one for the billing.
Since this assignment doesn't ask about which user should create which table, I have not made a User table but it's fairly simple to do so.

![Diagram](image.png)

The above diagram represents the end points. 