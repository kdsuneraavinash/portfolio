import { TeamMate } from './team-mate';

const gold = 'amber';
const silver = 'blue-grey';
const bronze = 'brown';
const other = 'grey';

export class Achievement {
  constructor(public title: string, public organizers: string, public type: string,
    public color: string, public content: string, public team?: TeamMate[]) {
  }

  public static readonly data: Achievement[] = [
    {
      title: `HackX - Winners`,
      organizers: 'University of Kelaniya (Sep 2019)',
      type: 'Startup Challenge',
      team: [TeamMate.sunera(), TeamMate.anju(), TeamMate.ruchin(), TeamMate.uvindu(), TeamMate.deepana()],
      color: gold,
      content:
        `
        hackX - one of the most successful inter-university hackathons unfolds its fourth 
        successive chapter as hackX 2019, addressing the innovative minds of the Sri Lankan 
        undergraduates. This time hackX revamps the ordinary hackathon into an Innovative 
        Startup Challenge, allowing more solid refined startups to emerge through the industrial 
        level product development guidance provided. 
        <br/>
        <br/>
        <a target="_blank" rel="noopener" href="http://hackx.lk/">
        Website
        </a>
        <br/>
        <br/>
        <img src="https://media.licdn.com/dms/image/C5122AQHrwjIxvK87Cg/feedshare-shrink_1280/0?e=1572480000&v=beta&t=UL_OajRyKeudlcpnauTIJ_L5rZxVCdF2v8RKfMFw-6U" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `UOJ CODERS V1.0 - WINNERS`,
      organizers: ' University of Jaffna (March 2019)',
      type: 'Competitive Programming [Algorithm]',
      team: [TeamMate.sunera(), TeamMate.deepana(), TeamMate.budvin()],
      color: gold,
      content:
        `
            UoJCoders coding competition is aimed to enhance the problem-solving skills and programming
            skills among the undergraduate students in computing and that will provide efficient programmers.
            The competition is a 12-hours inter-university coding competition.
            The competition is open to all undergraduate students in Sri Lanka.
            <br/>
            <br/>
            <a target="_blank" rel="noopener" href="http://society.jfn.ac.lk/comsoc/uojcoders/">
            Website
            </a>

            <br/>
            <br/>
            <img src="https://media.licdn.com/dms/image/C5122AQGLq2bSpMnTBg/feedshare-shrink_8192/0?e=1572480000&v=beta&t=ExjZyl-_D2txDVZQpFuVk0BS5tHy0hhpGDG39QB4p3k" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `Gold Medalist - IESL RoboGames 2018 at Techno'18`,
      organizers: 'IESL (Oct 2018)',
      type: 'Robotics Competition [Computer Vision]',
      team: [TeamMate.sunera(), TeamMate.anju(), TeamMate.tharaka(), TeamMate.senuda(), TeamMate.thusara()],
      color: gold,
      content:
        `
            IESL RoboGames 2018, is part of Techno, the leading engineering exhibition held in Sri Lanka.
            The competition was held on, 14th October (University category competition & Award ceremony),
            at Sirimavo Bandaranaike Memorial Exhibition & Convention Centre.
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/44126849_1135296756618004_1109189756756951040_n.jpg?_nc_cat=100&_nc_oc=AQlFyyKb7Ud-RZJJIwSDDH-ADHAjJYgIeZ2C-n6hmDcc8xwHIUYsjX8prkoQgPvQpAM&_nc_ht=scontent.fcmb5-1.fna&oh=c4a7df63d5dd9835b638c1f804b2d9de&oe=5DF4C868" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `14th Young Computer Scientist Competition - Gold Award (Senior Category - Government Schools)`,
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
      title: `Winners - Decrypt Ideathon 2018`,
      organizers: 'University of Moratuwa (May 2018)',
      type: 'Ideathon',
      team: [TeamMate.sunera(), TeamMate.deepana(), TeamMate.uvindu(), TeamMate.ruchin()],
      color: gold,
      content:
        `
            Decrypt Ideathon is a platform for pitching your creative solutions for existing problems.
            The competition is focused on enhancing the entrepreneurial skills of freshmen and pushing
            them forward on their journey towards excellence. Along the way, the applicants will be
            provided with opportunities for training and mentoring to sharpen their analytical, innovative,
            pitching and many more skills to perfection.
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/33432960_944508765722560_8966439796058619904_n.jpg?_nc_cat=101&_nc_oc=AQldktwOkPXwyyE9n3ncAKakoih2P2GauQHd9LtkYsLMotjDOvF9QYPSLCG53VR1M0Y&_nc_ht=scontent.fcmb5-1.fna&oh=634b61046c47b37ccf0851e355122f20&oe=5E25E408" class="img-fluid d-none d-md-block" alt="Photo">
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
    {
      title: `XOBot Challenge 2019 at Techno'18`,
      organizers: 'IESL (Oct 2019) [University of Jaffna]',
      type: 'Robotics Competition (Tic Tac Toe playing robot)',
      team: [TeamMate.sunera(), TeamMate.anju(), TeamMate.tharaka()],
      color: silver,
      content:
        `
        X-O Bots is a robotic manipulator design competition open for all engineering undergraduates who are IESL student members, organized by the University of Jaffna IESL Students’ Chapter for the first time.
        The task is to design a Tic-Tac-Toe playing robotic arm and compete at the grand finale at TECHNO 2019 this October. To get your creative juices flowing, participate with a group of up to 5 students and showcase your talents to the robotics world with new innovations.
        Win impressive cash prizes and recognizable certificates issued by the Institute of Engineers Sri Lanka.
            <br/>
            <br/>
            <div class="embed-responsive embed-responsive-16by9 img-fluid d-none d-md-block">
            <video loop controls class="embed-responsive-item">
            <source src="https://s56.getfvid.com/download?url=YUhSMGNITTZMeTl6WTI5dWRHVnVkQzFoYlhReUxURXVlSGd1Wm1KalpHNHVibVYwTDNZdmRETTVMakkwTVRNd0xUWXZOek14TXpFMU56aGZNemcxT1RBMk16ZzRPVGcxTkRjeFh6RTFNVFkxTVRnNE5qSTJOalExTkRjek9GOXVMbTF3TkQ5ZmJtTmZZMkYwUFRFd09DWmxabWM5WlhsS01scFhOV3BpTWxKc1dETlNhRnA1U1RaSmJUbHNZMFk1YjFwRFNqa21YMjVqWDI5alBVRlJiRFUyWkZkUlRHVkthalpoWDBGVmRVRmtabnB6WHpGSU9HNTJUazltWkVWUVJtOVZPVkU0V2pKNkxVc3lkREJLVmpGRVkzUmhOR0ZsZEd4eWRqWnVVSE1tWDI1algyaDBQWE5qYjI1MFpXNTBMV0Z0ZERJdE1TNTRlQ1p2YUQweU1HRmpNbUUwTnpFd1lqWmhNVGhtWTJWbVlqZzVNRFU0TkRKak5qWXpNaVp2WlQwMVJUWTFOREF4Tnc9PQ==" type="video/mp4">
            </video>
            </div>`
    },
    {
      title: `Silver Medalist - IESL IDEA Challenge 2018 at Techno'18`,
      organizers: 'IESL (Oct 2018)',
      type: 'Mobile App Competition',
      team: [TeamMate.sunera(), TeamMate.anju(), TeamMate.ruchin(), TeamMate.deepana(), TeamMate.uvindu()],
      color: silver,
      content:
        `
            Mobile app development competition.
            School children and undergraduates put their coding skills to the test at Idea Challenge 2018,
            the mobile app development competition held at Techno 2018.
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/44449747_1078089885693801_2966959735879761920_o.jpg?_nc_cat=102&_nc_oc=AQlDABDbdkC8MZgF5Z-LY4ZlDcPPDep8bfJpUsyfR-HDLM1G0XWZobbYN0mECmUbVDg&_nc_ht=scontent.fcmb5-1.fna&oh=ebf5ebae25ad4acca39958a43eaa015b&oe=5DF40E34" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `IEEEXtreme 13.0 - Sri Lankan Third place`,
      organizers: 'IEEE (Oct 2019)',
      type: 'Competitive Programming [Algorithm]',
      color: bronze,
      team: [TeamMate.sunera(), TeamMate.budvin(), TeamMate.deepana()],
      content:
        `
            Island Rank: 3<br/>
            World Rank: 99 (Pending)
            <br/>
            <br/>
            Team - CodeBreakers<br/><br/>
            <a href="https://csacademy.com/ieeextreme13/" target="_blank">Website</a>
            <br/><br/>
            IEEEXtreme is a global challenge in which teams of IEEE Student members –
            advised and proctored by an IEEE member, and often supported by an
            IEEE Student Branch – compete in a 24-hour time span against each
            other to solve a set of programming problems.
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/72887772_2666716260062873_4245721493041840128_n.png?_nc_cat=100&_nc_oc=AQlLeVJehoHzSi7k-S2sCFBrs8KjBhDhUM5UnGqPlqSsAOuyvuXeb5bqPvaGXMGE5sc&_nc_ht=scontent.fcmb5-1.fna&oh=2a2b249307d740c89fd8acc10694fa81&oe=5E1E37F7" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `IEEEXtreme 12.0 - Sri Lankan Third place`,
      organizers: 'IEEE (Oct 2018)',
      type: 'Competitive Programming [Algorithm]',
      color: bronze,
      team: [TeamMate.sunera(), TeamMate.deepana(), TeamMate.budvin()],
      content:
        `
            Island Rank: 3<br/>
            World Rank: 83
            <br/>
            <br/>
            Team - CodeBreakers97<br/><br/>
            <a href="https://csacademy.com/ieeextreme12/" target="_blank">Website</a>
            <br/><br/>
            IEEEXtreme is a global challenge in which teams of IEEE Student members –
            advised and proctored by an IEEE member, and often supported by an
            IEEE Student Branch – compete in a 24-hour time span against each
            other to solve a set of programming problems.
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/43573269_760690454280419_1986866529852981248_n.jpg?_nc_cat=104&_nc_oc=AQkqIO4VQz-B2N3SwIYmH9JCE6o486_k3mKCcrI5TS2oESF2nqKBD6vcvgH7yIoB04M&_nc_ht=scontent.fcmb5-1.fna&oh=90236070149e0bf8199a3bfa31fd9e7b&oe=5E3B2A00" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `MoraXtreme 4.0 - Second Runners up`,
      organizers: 'University of Moratuwa (Oct 2019)',
      type: 'Competitive Programming',
      team: [TeamMate.sunera(), TeamMate.budvin(), TeamMate.deepana()],
      color: bronze,
      content:
        `
        MoraXtreme 4.0 is a 12-hour algorithmic coding competition which will 
        provide a better platform to display your programming knowledge and skills
         in a more enthusiastic manner.         
           
        `
    },
    {
      title: `Sri Lanka Robotics Challenge 17 - 2nd Runners Up`,
      organizers: 'University of Moratuwa (Jan 2018)',
      type: 'Robotics Competition',
      team: [TeamMate.sunera(), TeamMate.deepana(), TeamMate.dinith()],
      color: bronze,
      content:
        `
            The E-Club of the University of Moratuwa presents Sri Lankan Robotics Challenge, a national robot competition,
            which enables the tech-savvy youth of the country to demonstrate their skills in an international standard robotics competition.
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t31.0-8/26840689_392579807865403_7287968632128277506_o.jpg?_nc_cat=102&_nc_oc=AQlo9DvLybzSc_G3LIEqtV8GbbGd2TQPewObz_k-Q6dBQ0rTJa8WHHkqW_eP0KHMqLU&_nc_ht=scontent.fcmb5-1.fna&oh=ebb0f0d3035ecb27da8cf35eb1344c50&oe=5E24B892" class="img-fluid d-none d-md-block" alt="Photo">
  
            `
    },
    {
      title: `Google Hashcode 2019 - Sri Lankan First Place | Globally 260th`,
      organizers: 'Google (Feb 2019)',
      type: 'Programming Competition [Algorithm]',
      color: other,
      team: [TeamMate.sunera(), TeamMate.gamlath(), TeamMate.mudith()],
      content:
        `
            Hash Code is a team programming competition, organized by Google, for students and professionals around the world.
            Teams are given an engineering problem to solve.
            <br/>
            <br/>
            <a target='_blank' rel="noopener" href="https://codingcompetitions.withgoogle.com/hashcode">
            Website
            </a>
            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/53236115_2122390737837126_8312432013361545216_n.jpg?_nc_cat=102&_nc_oc=AQnJt9S0kLK_q4wJ9pk-NKP2mD2JxzyDouRrvfo__zf9L34I9zv5J_rN1wkUJAJk-BE&_nc_ht=scontent.fcmb5-1.fna&oh=62bb2c3ee72dea8b18ed8ddd512b1906&oe=5DFB951B" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `SLIIT RoboFest - 4th place (University Category)`,
      organizers: 'SLIIT (Sep 2018)',
      type: 'Robotics Competition (Micromouse)',
      team: [TeamMate.sunera(), TeamMate.deepana(), TeamMate.budvin()],
      color: other,
      content:
        `
            RoboFest is the annual robotics competition organized by the Department of
            Electrical & Computer Engineering of Sri Lanka Institute of Information Technology.
            `
    },
    {
      title: `SLIIT RoboFest - Finalist (University Category)`,
      organizers: 'SLIIT (Sep 2019)',
      type: 'Robotics Competition (Micromouse)',
      team: [TeamMate.sunera(), TeamMate.deepana(), TeamMate.budvin(), TeamMate.dinith()],
      color: other,
      content:
        `
            RoboFest is the annual robotics competition organized by the Department of
            Electrical & Computer Engineering of Sri Lanka Institute of Information Technology.

            <br/>
            <br/>
            <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/70444422_1190646927789033_4895788218043072512_n.jpg?_nc_cat=107&_nc_oc=AQkZuUca1akQ-0f2kbM8hTV_CQjr3RgdI1NcXtqcpU6N1iW0iDClM7lemyt3s1ANz4Q&_nc_ht=scontent.fcmb5-1.fna&oh=e3ac29bf663bf396da04ea3f1fdd017f&oe=5E3546D6" class="img-fluid d-none d-md-block" alt="Photo">
            `
    },
    {
      title: `National Level School Software Championship - Merit`,
      organizers: 'Ministry of Education - Sri Lanka, CSSL (Jun 2015)',
      type: 'Competitive Programming [Algorithm]',
      color: other,
      content:
        `
            `
    }
  ];
}
