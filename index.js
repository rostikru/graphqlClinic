import express from "express";
import { graphqlHTTP } from "express-graphql";
import crypto from "crypto";
import schema from "./schema";


const app = express();

app.get("/", (req, res)=>{
    res.send("it works)");
});


class Patient {
    constructor(id, {fullName, gender, contacts, procedurs}) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.contacts = contacts;
        this.procedurs = procedurs;
    }
}

        
class Procedure {
    constructor(id, {name, duration, location, doctor}) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.location = location;
        this.doctor = doctor;
    }
}

class Clinic {
    constructor(id, {name, address, city, procedurs}) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.procedurs = procedurs;
    }
}

const patientDb = {};
const clinicDb = {};
const procedureDb = {};

const resolver = {
    patient: () => {
        return {
            id: 123,
            fullName: 'Faffev Def',
            gender: "male",
            contacts:  "testCity",
            procedurs: [
                {name: "haveFun"}, 
                {name: "haveALotOfFun"}]
        }
    },
    createPatient: ({input}) => {
        let id = crypto.randomBytes(10).toString("hex");
        patientDb[id] = input;
        return new Patient(id, input);
    },
    createProcedure: ({input}) => {
        let id = crypto.randomBytes(10).toString("hex");
        procedureDb[id] = input;
        return new Procedure(id, input);
    },
    updateClinic: ({input}) => {
        let id = crypto.randomBytes(10).toString("hex");
        clinicDb[id] = input;
        return new Clinic(id, input);
    },
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen(8080, ()=> console.log("Running"))