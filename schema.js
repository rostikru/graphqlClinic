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


// описати схему, квері і мутації для 3 табличок:
// 1.) паціент
// 2.) клініка
// 3.) процедури
// кожна з табличок має мінімум 5 полів
// паціент -- клініка 1 до 1
// клінка -- процедури 1 до багатьох
// паціент -- процедури 1 до багатьох
// повинна бути базова схема для графкюл по всім табличкам
// 3 квері/мутації, по 1 для кожної з табличок

export default schema;