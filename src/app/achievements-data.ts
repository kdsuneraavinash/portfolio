import { TeamMate } from './team-mates';

let gold: string = 'amber';
let silver: string = 'blue-grey';
let bronze: string = 'brown';
let other: string = 'grey';

export let achievementsData = [
    {
        title: `UOJ CODERS V1.0 - WINNERS`,
        organizers: ' University of Jaffna (March 2019)',
        type: 'Competitive Programming [Algorithm]',
        team: [TeamMate.me(), TeamMate.deepana(), TeamMate.budvin()],
        color: gold,
        content:
            `
            UoJCoders coding competition is aimed to enhance the problem-solving skills and programming 
            skills among the undergraduate students in computing and that will provide efficient programmers. 
            The competition is a 12-hours inter-university coding competition. 
            The competition is open to all undergraduate students in Sri Lanka.
            <br/>
            <br/>
            <a target='_blank' href="http://society.jfn.ac.lk/comsoc/uojcoders/">
            http://society.jfn.ac.lk/comsoc/uojcoders/
            </a>
            `
    },
    {
        title: `Google Hashcode 2019 - Sri Lankan First Place | Globally 260th`,
        organizers: 'Google (Feb 2019)',
        type: 'Programming Competition [Algorithm]',
        color: other,
        team: [TeamMate.me(), TeamMate.gamlath(), TeamMate.mudith()],
        content:
            `
            Hash Code is a team programming competition, organized by Google, for students and professionals around the world. 
            Teams are given an engineering problem to solve. 
            <br/>
            <br/>
            <a target='_blank' href="https://codingcompetitions.withgoogle.com/hashcode">
            https://codingcompetitions.withgoogle.com/hashcode
            </a>
            `
    },
    {
        title: `Silver Medalist - IESL IDEA Challenge 2018 at Techno'18`,
        organizers: 'IESL (Oct 2018)',
        type: 'Mobile App Competition',
        team: [TeamMate.me(), TeamMate.anju(), TeamMate.ruchin(), TeamMate.deepana(), TeamMate.uvindu()],
        color: silver,
        content:
            `
            Mobile app development competition.
            School children and undergraduates put their coding skills to the test at Idea Challenge 2018, 
            the mobile app development competition held at Techno 2018.
            `
    },
    {
        title: `Gold Medalist - IESL RoboGames 2018 at Techno'18`,
        organizers: 'IESL (Oct 2018)',
        type: 'Robotics Competition [Computer Vision]',
        team: [TeamMate.me(), TeamMate.anju(), TeamMate.tharaka(), TeamMate.senuda(), TeamMate.thusara()],
        color: gold,
        content:
            `
            IESL Robogames 2018, is part of Techno, the leading engineering exhibition held in Sri Lanka. 
            The competition was held on, 14th October (University category competition & Award ceremony),
            at Sirimavo Bandaranaike Memorial Exhibition & Convention Centre.
            `
    },
    {
        title: `SLIIT Robofest - 4th place (University Category)`,
        organizers: 'SLIIT (Oct 2018)',
        type: 'Robotics Competition',
        team: [TeamMate.me(), TeamMate.deepana(), TeamMate.budvin()],
        color: other,
        content:
            `
            ROBOFEST is the annual robotics competition organized by the Department of
            Electrical & Computer Engineering of Sri Lanka Institute of Information Technology.
            `
    },
    {
        title: `IEEEXtreme 12.0 - Sri Lanakan Third place`,
        organizers: 'IEEE (Oct 2018)',
        type: 'Competitive Programming [Algorithm]',
        color: bronze,
        team: [TeamMate.me(), TeamMate.deepana(), TeamMate.budvin()],
        content:
            `
            Island Rank: 3<br/>
            World Rank: 83
            <br/>
            <br/>
            Team - CodeBreakers97<br/><br/>
            <a href="https://csacademy.com/ieeextreme12/" target="_blank">https://csacademy.com/ieeextreme12/</a>
            <br/><br/>
            IEEEXtreme is a global challenge in which teams of IEEE Student members – 
            advised and proctored by an IEEE member, and often supported by an 
            IEEE Student Branch – compete in a 24-hour time span against each 
            other to solve a set of programming problems.
            `
    },
    {
        title: `Winners - Decrypt Ideathon 2018`,
        organizers: 'University of Moratuwa (May 2018)',
        type: 'Ideathon',
        team: [TeamMate.me(), TeamMate.deepana(), TeamMate.uvindu(), TeamMate.ruchin()],
        color: gold,
        content:
            `
            Decrypt Ideathon is a platform for pitching your creative solutions for existing problems. 
            The competition is focused on enhancing the entrepreneurial skills of freshmen and pushing 
            them forward on their journey towards excellence. Along the way, the applicants will be 
            provided with opportunities for training and mentoring to sharpen their analytical, innovative, 
            pitching and many more skills to perfection.
            `
    },
    {
        title: `Sri Lanka Robotics Challenge 17 - 2nd Runners Up`,
        organizers: 'University of Moratuwa (Jan 2018)',
        type: 'Robotics Competition',
        team: [TeamMate.me(), TeamMate.deepana(), TeamMate.dinith()],
        color: bronze,
        content:
            `
            The E-Club of the University of Moratuwa presents Sri Lankan Robotics Challenge, a national robot competition, 
            which enables the tech-savvy youth of the country to demonstrate their skills in an international standard robotics competition.
            `
    },
    {
        title: `14th Young Computer Scientist Competition - Gold Award (Senior Catergory - Government Schools)`,
        organizers: 'Ministry of Education - Sri Lanka, FITIS (Aug 2015)',
        type: 'Desktop Application',
        color: gold,
        content:
            `
            Project: 
            Math Quiz - a learning management system designed to teach students who have a little knowledge about mathematics.
            `
    },
    {
        title: `National Level School Software Championship - Merit`,
        organizers: 'Ministry of Education - Sri Lanka, CSSL (Jun 2015)',
        type: 'Competitve Programming [Algorithm]',
        color: other,
        content:
            `
            `
    },
    {
        title: `ICT Quiz Competition - (1AB) Western Province 1st place | Grade 11 (1AB)`,
        organizers: 'Ministry of Education - Sri Lanka (May 2013)',
        type: 'Quiz Competition',
        color: gold,
        content:
            `
            `
    },


];