import { Injectable } from "@angular/core";
import { user } from "./UserNameUserPassword";
import { CompanyDetails } from "./CompanyDetails";

@Injectable(

)
export class CompanyIdNameAddress {

    // name: string="";
    // address: string="";

   objToEdit: any;

    company: CompanyDetails[] = [
        {
            id: 100,
            name: "apex.iol",
            address: "noida",

        },
        {
            id: 101,
            name: "git.home",
            address: "ahmedabad",

        },
        {
            id: 102,
            name: "finotech",
            address: "patna",

        },
        {
            id: 103,
            name: "sigmaFx",
            address: "ahmedabad",

        },
        {
            id: 104,
            name: "funnel",
            address: "ahmedabad",

        },
        {
            id: 105,
            name: "webelight",
            address: "ahmedabad",

        },
    ]


    constructor() {

    }

}