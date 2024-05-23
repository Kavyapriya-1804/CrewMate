import { ROUTE_CONSTANTS } from "./routeConstants";

const LOGO = {
    brandName : "CREWMATE"
}

const CREW_INITIALIZATION_PAGE = {
    STEP_1 : {
        pageTitle : "Create Agents",
        formFields : {
            agentName : {
                label : "Name"
            },
            agentRole : {
                label : "Role"
            },
            agentGoal : {
                label : "Goal"
            },
            agentBackstory : {
                label : "Backstory"
            },
            submitButton : "Create Agents"
        },
        createdAgents : {
            title : "Created Agents"
        }
    },
    STEP_2 : {
        pageTitle : "Crew Summary",
        formFields : {
            crewName : {
                label : "Name your crew"
            },
            submitButton : "Create Crew"
        }
    }
}

const CREW_INTERACTION_PAGE = {
    pageTitle : "Crew Name",
    buttons : {
        assignTask : {
            label : "Assign Task"
        },
        kickoff : {
            label : "Kickoff",
            link : ""
        }
    },
    modal : {
        header : {
            assignTasks : "ASSIGN TASKS",
            video : "VIDEO",
            reportAnalysisChart : "REPORT ANALYSIS - CHART"
        }
    },
    ROLES : {
        user : {
            name : "user",
            className : "user"
        },
        crewMate : {
            name: "crewMate",
            className : "crew-mate"
        }
    },
    noInteractionsYetContainer : {
        message : "Assign Tasks to Kickoff the crew"
    }
}

const ERROR_PAGE = {
    message : {
        primary : "OOPS ! Wrong Route :(",
        secondary : "Head back to ",
        redirectToPage : {
            label : "HOME",
            link : ROUTE_CONSTANTS.HOME
        }
    }
}

export const PAGE_CONSTANTS= {
    LOGO : LOGO,
    CREW_INITIALIZATION_PAGE : CREW_INITIALIZATION_PAGE,
    CREW_INTERACTION_PAGE : CREW_INTERACTION_PAGE,
    ERROR_PAGE : ERROR_PAGE
}
