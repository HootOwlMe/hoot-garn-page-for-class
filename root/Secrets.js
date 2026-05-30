class Secrets{

    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        this.complete = false;
    }

    achieveSecret(){
        this.complete = true;
    }

    secretCompleted(){
        return this.complete;
    }

    secretDescription(){
        return this.description;
    }

    secretTitle(){
        return this.title;
    }

    secretID(){
        return this.id;
    }
}

let jsonData = {
    "secrets": [
        {
            "id": "CarSong",
            "title": "Car's Song",
            "description": "Listen to Car's Little Song."
        },
        {
            "id": "WhereCar",
            "title": "The Where (Car)",
            "description": "Find the secret button on Car's page."
        },
        {
            "id": "KeepsFound",
            "title": "KeepMeSafe Discovered",
            "description": "Find KeepMeSafe on Car0's page."
        },
        {
            "id": "TotalGarn",
            "title": "Totally Garnular!!",
            "description": "Hear Garn47 go 'Totally Garnular!'"
        },
        {
            "id": "WhereCarr",
            "title": "The Where (Carr)",
            "description": "Find the secret button on Carr's page."
        },
        {
            "id": "47",
            "title": "Year 47",
            "description": "Travel back to the year 47 AD."
        }
    ]
}

var secretArray = jsonData.secrets.map(secret => new Secrets(secret.id, secret.title, secret.description));

let carrFound = localStorage.getItem('WhereCarr');
let carFound = localStorage.getItem('WhereCar');

