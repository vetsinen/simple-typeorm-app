import "reflect-metadata";
import {createConnection} from "typeorm";
import {Studio} from "./entity/Studio";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const studio = new Studio();
    studio.shortName = "Bachata blanca";
    studio.address = "Киев, ул. Грушевского, 30/1";
    await studio.save();
    console.log("Saved a new studio with id: " + studio.id);

}).catch(error => console.log(error));
