
# Book Store Api 📚

This api is written to add/remove author and book on all platforms.


## Features

- Login/Register
- Create Book or Author
- View Book or Author
- View All Books and All Authors

  
## ℹ️ How to install Book Store Api ?

```html
(❗ Before these steps, make sure you have the docker application installed on your computer ❗)
```


#### 1. First go to the directory where the nodejs and docker file together file is located. We open the "cmd"  as shown in the image below.


![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/c8h1u4r.png)

#### 2.After opening cmd, we enter the codes in the image.


![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/4ci9szd.png)




#### 3.After these procces, we enter the codes in the image below.


![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/beweith.png)


#### 4.Our project is running as a container. As in the picture, we enter the text "localhost:8080" in the url part of our browser.


![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/ivr6igy.png)



#

# This part of about Using Api 👨‍💻

#### Our API consists of 9 parts:
- ( / ) for **Main Page**  
- ( /register ) for **Register Page**
- ( /login ) for **Login Page**
- ( /books ) for User's **Books Page**
- ( /books/add) for  **Book Add Page**
- ( /books/delete/:id ) for  **Book Delete Page**
- ( /authors ) for User's **Authors Page**
- ( /authors/add ) for  **Author Add Page**
- ( /authors/delete/:id ) for  **Author Delete Page**

### (Main Page GET) ⬅️

```http
  GET "/"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `User` | `boolen` | This parameter is there to let the client side know if the user is logged in. |
| **`Books`** | `array` | **This parameter is books data from our database.**
| `._id` | `object (key)` | This parameter is ***id*** of books. |
| `.Title` | `object (key)` | This parameter is ***Title*** of books. |
| `.Author` | `object (key)` | This parameter is ***Author*** of books. |
| `.Price` | `object (key)` | This parameter is ***Price*** of books. |
| `.Isbn` | `object (key)` | This parameter is ***ISBN*** of books. |
| `.Language` | `object (key)` | This parameter is ***Language*** of books. |
| `.NumberOfPages` | `object (key)` | This parameter is ***Number of Pages*** of books. |
| `Publisher` | `object (key)` | This parameter is ***Publisher*** of books. |
| `Bookİmage` | `object (key)` | This parameter is ***İmage***  of books. |
| `CreatorName` | `object (key)` | This parameter is ***Creator name*** of books. |
| **`Authors`** | `array` | **This parameter is books data from our database**.
| `._id` | `object (key)` | This parameter is ***id*** of Authors. |
| `.NameOfAuthor` | `object (key)` | This parameter is ***Name*** of Authors. |
| `.CountryOfAuthor` | `object (key)` | This parameter is ***Country*** of Authors. |
| `.BirthDateOfAuthor` | `object (key)` | This parameter is ***Birth Date*** of Authors. |
| `.Authorİmage` | `object (key)` | This parameter is ***İmage*** of Authors. |
| `.CreatorName` | `object (key)` | This parameter is ***Creator name*** of Authors. |

### (Register Page GET) ⬅️

```http
  GET "/register"   
```
#####  This command will show the register page.
### (Register Page POST) ➡️

```http
  POST "/register"   
```
| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `String` | This parameter is ***username*** for user register. |
| `email` | `String` | This parameter is ***email*** for user register. |
| `password` | `String`  | This parameter is ***password*** for user register. |

### (Login Page GET) ⬅️

```http
  GET "/login"   
```
#####  This command will show the login page.
### (Login Page POST) ➡️

```http
  POST "/login"   
```
| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `String` | This parameter is ***username*** for user login. |
| `password` | `String`  | This parameter is ***password*** for user login. |


### (User`s Books Page GET) ⬅️

```http
  GET "/books"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| **`Books`** | `array` | **This parameter is books data from our database.**
| `._id` | `object (key)` | This parameter is ***id*** of books. |
| `.Title` | `object (key)` | This parameter is ***Title*** of books. |
| `.Author` | `object (key)` | This parameter is ***Author*** of books. |
| `.Price` | `object (key)` | This parameter is ***Price*** of books. |
| `.Isbn` | `object (key)` | This parameter is ***ISBN*** of books. |
| `.Language` | `object (key)` | This parameter is ***Language*** of books. |
| `.NumberOfPages` | `object (key)` | This parameter is ***Number of Pages*** of books. |
| `Publisher` | `object (key)` | This parameter is ***Publisher*** of books. |
| `Bookİmage` | `object (key)` | This parameter is ***İmage***  of books. |
| `CreatorName` | `object (key)` | This parameter is ***Creator name*** of books. |

### (Book Add Page GET) ⬅️

```http
  GET "/books/add"   
```
#####  This command will show the Boook Add page.


### (Book Add Page POST) ➡️

```http
  POST "/books/add"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `.Title` | `String` | This parameter is ***Title*** of books. |
| `.Author` | `String` | This parameter is ***Author*** of books. |
| `.Price` | `Number` | This parameter is ***Price*** of books. |
| `.Isbn` | `String` | This parameter is ***ISBN*** of books. |
| `.Language` | `String` | This parameter is ***Language*** of books. |
| `.NumberOfPages` | `Number` | This parameter is ***Number of Pages*** of books. |
| `Publisher` | `String` | This parameter is ***Publisher*** of books. |
| `Bookİmage` | `String` | This parameter is ***İmage***  of books. |
| `CreatorName` | `String` | This parameter is ***Creator name*** of books. |


### (Delete User's Books Page GET) 🗑️⬅️

```http
  GET "/books/delete/:id"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `object (key)` | This parameter should be equal to the  " ***_id*** "  parameter for each book.
| `.CreatorName` | `object (key)` | This parameter is ***Creator name*** of books. |



### (User`s Authors Page GET) ⬅️

```http
  GET "/authors"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| **`Authors`** | `array` | **This parameter is books data from our database**.
| `._id` | `object (key)` | This parameter is ***id*** of Authors. |
| `.NameOfAuthor` | `object (key)` | This parameter is ***Name*** of Authors. |
| `.CountryOfAuthor` | `object (key)` | This parameter is ***Country*** of Authors. |
| `.BirthDateOfAuthor` | `object (key)` | This parameter is ***Birth Date*** of Authors. |
| `.Authorİmage` | `object (key)` | This parameter is ***İmage*** of Authors. |
| `.CreatorName` | `object (key)` | This parameter is ***Creator name*** of Authors. |



### (Author Add Page GET)⬅️

```http
  GET "/authors/add"   
```
#####  This command will show the Author Add page.


### (Author Add Page POST) ➡️

```http
  POST "/authors/add"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `.NameOfAuthor` | `String` | This parameter is ***Name*** of Authors. |
| `.CountryOfAuthor` | `String` | This parameter is ***Country*** of Authors. |
| `.BirthDateOfAuthor` | `String` | This parameter is ***Birth Date*** of Authors. |
| `.Authorİmage` | `String` | This parameter is ***İmage*** of Authors. |



### (Delete User's Authors Page GET) 🗑️⬅️

```http
  GET "/authors/delete/:id"   
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `object (key)` | This parameter should be equal to the  " ***_id*** "  parameter for each author.|
| `.CreatorName` | `object (key)` | This parameter is ***Creator name*** of authors. |

#

## Feedback 📧

If you have any feedback, please contact me at ysia1912@hotmail.com .

  