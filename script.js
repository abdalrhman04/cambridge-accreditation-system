const trainingCenters=[
    {
        id:1,
        name:"Future Academy",
        location:"Amman",
        description:"Provides professional IT training courses.",
        status:"Active",
        accreditationDate:"2025-01-15"
    },
    {
        id:2,
        name:"Smart Learning Center",
        location:"Irbid",
        description:"Offers technology and business courses.",
        status:"Active",
        accreditationDate:"2025-03-10"
    },
    {
        id: 3,
        name: "Global Skills Institute",
        location: "Zarqa",
        description: "Specializes in professional development.",
        status: "Inactive",
        accreditationDate: "2024-06-20"
    },
    {
        id: 4,
        name: "Digital Education Hub",
        location: "Amman",
        description: "Focuses on programming and digital skills.",
        status: "Active",
        accreditationDate: "2025-05-12"
    },
    {
        id: 5,
        name: "Excellence Training Center",
        location: "Aqaba",
        description: "Provides leadership and management courses.",
        status: "Inactive",
        accreditationDate: "2024-09-05"
    },
    {
        id: 6,
        name: "Innovation Academy",
        location: "Madaba",
        description: "Offers software and design training.",
        status: "Active",
        accreditationDate: "2025-07-18"
    }
]

function displayTrainingCenters(searchText = ""){
    const container = document.getElementById("centers-container");
    
    container.innerHTML="";

    const activeCenters = trainingCenters.filter(function(center){
        return center.status === "Active" &&
        center.name.toLowerCase().includes(searchText.toLowerCase());
    });

    activeCenters.forEach(function(center){
        const card = document.createElement("div");

        card.className = "center-card";
        card.innerHTML=`
        <h3>${center.name}</h3>
        <p><strong>Location:</strong> ${center.location}</p>
        <p>${center.description}</p>
        <p><strong>Status:</strong> ${center.status}</p>
        <p><strong>Accreditation Date:</strong> ${center.accreditationDate}</p>
        `;
        container.appendChild(card);
    });
    if(activeCenters.length ===0){
        container.textContent="No accredited training centers available.";
    }
}
displayTrainingCenters();

const trainers=[
    {
        id: 1,
        name: "Ahmad Khaled",
        specialization: "Web Development",
        centerId: 1,
        status: "Active",
        accreditationDate: "2025-02-10"
    },
    {
        id: 2,
        name: "Sara Ali",
        specialization: "Cybersecurity",
        centerId: 2,
        status: "Active",
        accreditationDate: "2025-04-15"
    },
    {
        id: 3,
        name: "Omar Hassan",
        specialization: "Data Science",
        centerId: 3,
        status: "Active",
        accreditationDate: "2025-01-20"
    },
    {
        id: 4,
        name: "Lina Ahmad",
        specialization: "UI/UX Design",
        centerId: 4,
        status: "Active",
        accreditationDate: "2025-06-12"
    },
    {
        id: 5,
        name: "Mohammad Sami",
        specialization: "Networking",
        centerId: 1,
        status: "Inactive",
        accreditationDate: "2024-11-05"
    },
    {
        id: 6,
        name: "Huda Saleh",
        specialization: "Software Engineering",
        centerId: 6,
        status: "Active",
        accreditationDate: "2025-08-18"
    }
];

function displayTrainers(searchText=""){
    const container = document.getElementById("trainers-container");
    
    container.innerHTML="";

    const activeTrainers = trainers.filter(function(trainer){
        const center = trainingCenters.find(function(center){
            return center.id===trainer.centerId;
        });

        return trainer.status === "Active" &&
        center !== undefined &&
        center.status === "Active" &&
        trainer.name.toLowerCase().includes(searchText.toLowerCase());
    });

    activeTrainers.forEach(function(trainer){
        const center = trainingCenters.find(function(center){
            return center.id === trainer.centerId;
        });
        
        const card=document.createElement("div");
        card.className="trainer-card";
        card.innerHTML=`
        <h3>${trainer.name}</h3>
        <p><strong>Specialization: </strong>${trainer.specialization}</p>
        <p><strong>Training Center: </strong>${center.name}</p>
        <p><strong>Status: </strong>${trainer.status}</p>
        <p><strong>Accreditation Date: </strong>${trainer.accreditationDate}</p>
        `;
        container.appendChild(card);
    });
    
    if(activeTrainers.length===0){
        container.textContent = "No accredited trainers available."
    }
}
displayTrainers();

const centerSearch=document.getElementById("center-search");
centerSearch.addEventListener("input", function(){
    displayTrainingCenters(centerSearch.value);
});

const trainerSearch=document.getElementById("trainer-search");

trainerSearch.addEventListener("input", function(){
    displayTrainers(trainerSearch.value);
});
displayTrainingCenters();
displayTrainers();

document.getElementById("year").textContent=new Date().getFullYear();