import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Query {
        patient: Patient
        clinic: Clinic,
        procedurs: Procedurs
    }

    type Clinic {
        id: ID,
        name: String
        address: String
        city: String
        procedurs: [Procedurs]
    }

    type Patient {
        id: ID,
        fullName: String
        gender: String
        clinic:  Clinic
        procedurs: [Procedurs]        
    }

    type Procedurs {
        id: ID,
        name: String,
        duration: String,
        location: String,
        doctor: String
    }

    type Mutation {
        createPatient(input: PatientInput): Patient,
        createProcedure(input: ProcedureInput): Procedurs,
        updateClinic(input: ClinicInput): Clinic
    }

    input PatientInput {
        id: ID,
        fullName: String
        gender: String
        clinic:  String
        procedurs: String 
    }

    input ProcedureInput {
        id: ID,
        name: String,
        duration: String,
        location: String,
        doctor: String
    }

    input ClinicInput {
        id: ID,
        name: String
        address: String
        city: String
        procedurs: String
    }  

`)

export default schema;