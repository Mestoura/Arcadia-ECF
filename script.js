// Data storage for animals, services, and schedules

const animals = [

    {
  
      id: 1,
  
      name: "Lion",
  
      habitat: "Jungle",
  
      healthStatus: "Good",
  
      foodGrammage: 500
  
    },
  
    {
  
        id: 1,
    
        name: "Tigre",
    
        habitat: "Jungle",
    
        healthStatus: "Good",
    
        foodGrammage: 500
    
      },
    {
  
      id: 3,
  
      name: "Singe",
  
      habitat: "Jungle",
  
      healthStatus: "Excellent",
  
      foodGrammage: 200
  
    },
  
    {
  
      id: 4,
  
      name: "Girafe",
  
      habitat: "Savane",
  
      healthStatus: "good",
  
      foodGrammage: 1000
  
    },
  
    {
  
        id: 5,
    
        name: "Zebre",
    
        habitat: "Savane",
    
        healthStatus: "good",
    
        foodGrammage: 500
    
      },
      {
  
        id: 6,
    
        name: "Suricate",
    
        habitat: "Savane",
    
        healthStatus: "good",
    
        foodGrammage: 50
    
      },

      {
  
        id: 7,
    
        name: "Cameleon",
    
        habitat: "Marais",
    
        healthStatus: "good",
    
        foodGrammage: 50
    
      },

      {
  
        id: 8,
    
        name: "Lézard",
    
        habitat: "Marais",
    
        healthStatus: "good",
    
        foodGrammage: 20
    
      },

      {
  
        id: 9,
    
        name: "Loutre",
    
        habitat: "Marais",
    
        healthStatus: "good",
    
        foodGrammage: 50
    
      },

    // ...
  
  ];
  
  
  const services = [
  
    {
  
      id: 1,
  
      name: "Soins Vétérinaires",
  
      description: "peser et alimenter l'animal"
  
    },
  
    {
  
      id: 2,
  
      name: "Preparation des aliments",
  
      description: "choix de l'aliment en fonction de l'animal"
  
    },
  
    {
  
      id: 3,
  
      name: "Maintenance des enclos",
  
      description: "Nettoyage et entretien réguliers des habitats des animaux"
  
    },
  
    // ...
  
  ];
  
  
  const schedules = [
  
    {
  
      id: 1,
  
      day: "Monday",
  
      openingTime: "10:00 AM",
  
      closingTime: "9:00 PM"
  
    },
  
    {
  
      id: 2,
  
      day: "Tuesday",
  
      openingTime: "10:00 AM",
  
      closingTime: "9:00 PM"
  
    },
  
    {
  
      id: 3,
  
      day: "Wednesday",
  
      openingTime: "10:00 AM",
  
      closingTime: "9:00 PM"
  
    },
  
    {
  
        id: 4,
    
        day: "Thursday",
    
        openingTime: "10:00 AM",
    
        closingTime: "9:00 PM"
    
      },
      {
  
        id: 5,
    
        day: "Friday",
    
        openingTime: "10:00 AM",
    
        closingTime: "9:00 PM"
    
      },
      {
  
        id: 6,
    
        day: "Saturaday",
    
        openingTime: "10:00 AM",
    
        closingTime: "9:00 PM"
    
      },
      {
  
        id: 7,
    
        day: "Sunday",
    
        openingTime: "10:00 AM",
    
        closingTime: "9:00 PM"
    
      },
    // ...
  
  ];
  
  
  // Function to display animal information
  
  function displayAnimalInfo(animalId) {
  
    const animal = animals.find(a => a.id === animalId);
  
    if (animal) {
  
      document.getElementById("animal-name").innerHTML = animal.name;
  
      document.getElementById("animal-habitat").innerHTML = animal.habitat;
  
      document.getElementById("animal-health-status").innerHTML = animal.healthStatus;
  
      document.getElementById("animal-food-grammage").innerHTML = animal.foodGrammage + " grams";
  
    }
  
  }
  
  
  // Function to display services information
  
  function displayServicesInfo() {
  
    const servicesList = document.getElementById("services-list");
  
    servicesList.innerHTML = "";
  
    services.forEach(service => {
  
      const serviceListItem = document.createElement("li");
  
      serviceListItem.innerHTML = `${service.name} - ${service.description}`;
  
      servicesList.appendChild(serviceListItem);
  
    });
  
  }
  
  
  // Function to display schedules information
  
  function displaySchedulesInfo() {
  
    const schedulesList = document.getElementById("schedules-list");
  
    schedulesList.innerHTML = "";
  
    schedules.forEach(schedule => {
  
      const scheduleListItem = document.createElement("li");
  
      scheduleListItem.innerHTML = `${schedule.day} - ${schedule.openingTime} to ${schedule.closingTime}`;
  
      schedulesList.appendChild(scheduleListItem);
  
    });
  
  }
  
  
  // Function to handle visitor reviews
  
  function submitReview() {
  
    const reviewText = document.getElementById("review-text").value;
  
    const reviewList = document.getElementById("review-list");
  
    const reviewListItem = document.createElement("li");
  
    reviewListItem.innerHTML = reviewText;
  
    reviewList.appendChild(reviewListItem);
  
  }
  
  
  // Function to handle visitor login
  
  function visitorLogin() {
  
    const username = document.getElementById("visitor-username").value;
  
    const password = document.getElementById("visitor-password").value;
  
    // TO DO: implement authentication logic
  
    alert(`Welcome, ${username}!`);
  
  }
  
  
  // Function to handle employee login
  
  function employeeLogin() {
  
    const username = document.getElementById("employee-username").value;
  
    const password = document.getElementById("employee-password").value;
  
    // TO DO: implement authentication logic
  
    alert(`Welcome, ${username}!`);
  
  }
  
  
  // Event listeners
  
  document.getElementById("animal-button").addEventListener("click", () => {
  
    const animalId = document.getElementById("animal-id").value;
  
    displayAnimalInfo(animalId);
  
  });
  
  
  document.getElementById("services-button").addEventListener("click", displayServicesInfo);
  
  
  document.getElementById("schedules-button").addEventListener("click", displaySchedulesInfo);
  
  
  document.getElementById("submit-review-button").addEventListener("click", submitReview);
  
  
  document.getElementById("visitor-login-button").addEventListener("click", visitorLogin);
  
  
  document.getElementById("employee-login-but");