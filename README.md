
<a name="readme-top"></a>

<div align="center">
  <h1><b>Car Booking App</b></h1>
    <img src='./frontend/public/car%20booking%20logo.png' height="120px" width="auto"/>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 Car Booking App <a name="about-project"></a>

 **Car Booking App** is an app build on ruby using rails and React.
 the app is built in two different apps that allow users to reserve cars for renting. the user can browse the list of cars and show details for each car, the user can submit a reservation form and can cancel reservation...

 the app uses authentication

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

This project was implemented using:

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Create cars and explore list of cars**
- **Record rentals reservations**
- **Authentication/Authorization for protected routes**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps:

### Prerequisites

In order to run this project you need to have installed:

- [ ] You’ll need to have Ruby and Rails on your machine.

Optionally, in order to modify this project you should to have installed:

- [ ] Git.

- [ ] Code editor like: [Visual Studio code](https://code.visualstudio.com/), or others...

### Setup

To clone this repository to your desired folder:

```console
git clone https://github.com/sajibarafatsiddiqui/final-capstone-project.git
```

- Access the cloned directory with:

```console
cd final-capstone-project
```

- Open it with your favorite code editor.

- Access the backend folder by typing:

```console
cd final-capstone-project/backend
```

- Access the frontend folder by typing:

```console
cd final-capstone-project/frontend
```

### Usage

#### Backend

It is require that you setup your database to run this project, check the config/database.yml and make sure that the username and password match you postgresql setup, then run:

```console
rails db:create
```

```console
rails db:migrate
```

To run the API, execute the following command in the project directory:

```console
rails server -p 5000
```

To run test, execute the following commands in the project directory.

To run the unit tests:

  ```console
  rspec ./spec/models 
  ```
To run the integration tests:

  ```console
  rspec ./spec/views
  ```

  #### Frontend

In order to launch the frontend, it's mandatory to install the node dependencies then run the project

```console
npm install
```

```console
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Author <a name="authors"></a>

👤 **Israel CHIZUNGU**

- GitHub: [chiztechnology](https://github.com/chiztechnology)
- Twitter: [IsraelChizungu](https://twitter.com/IsraelChizungu)
- LinkedIn: [IsraelChizungu](https://www.linkedin.com/in/israelchizungu/)

👤 **Sajib SIDDIQUI**

- GitHub: [sajibarafatsiddiqui](https://github.com/sajibarafatsiddiqui)
- Twitter: [sajibsiddiqui](https://twitter.com/)
- LinkedIn: [sajibsiddiqui](https://www.linkedin.com/)

👤 **Solomon AKPURU**

- GitHub: [Solobarine](https://github.com/solobarine)
- Twitter: [SolomonAkpuru](https://twitter.com/)
- LinkedIn: [SolomonAkpuru](https://www.linkedin.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

We will implement this on the future:

- [ ] **Make the app responsive**
- [ ] **Implement Upload file on car form**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/sajibarafatsiddiqui/final-capstone-project/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

 For Murat Korkmaz on Behance [author of the original UI/UX design](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)  “all rights reserved”

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)
