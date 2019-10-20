import { TeamMate } from './team-mate';

export class Project {
  constructor(public title: string, public content: string, public team?: TeamMate[]) {
  }

  static readonly data = [
    {
      title: `Teleport (App developed for the HackX competition)`,
      team: [TeamMate.sunera(), TeamMate.anju(), TeamMate.ruchin(), TeamMate.uvindu(), TeamMate.deepana()],
      content:
        `
        Teleport is an app which intends to revelutionize transportation and logistics industry by further incorporating the concepts of sharing economy. 
        <br/>
        This app was made using flutter and supports both iOS and android platforms.
        <br/>
        <br/>
        <a target="_blank" rel="noopener" href="http://hackx.lk/">
        Website
        </a>
        <br/>
        <br/>
        <img src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/71107900_1385907711556906_642125545219293184_n.jpg?_nc_cat=101&_nc_oc=AQlBu9Cvpz2MXxbhsBSgMQFTsBmauIfo5AhaljHXymbS_sluQJdQjGlB9dHlpXCh6rQ&_nc_ht=scontent.fcmb5-1.fna&oh=8c3a36e2499b138a0d70077d366d2fa6&oe=5E1A3CFC" class="img-fluid d-none d-md-block" alt="Screenshots">
         `
    },
    {
      title: `THEME PROVIDER - OPEN SOURCE PROJECT`,
      content:
        `
            <p><a href="https://codemagic.io/apps/5cfb60390824820019d5af6b/5cfb60390824820019d5af6a/latest_build" rel="nofollow"><img src="https://camo.githubusercontent.com/ad035dbbe78bf77688ab8f125a17dae13b27a120/68747470733a2f2f6170692e636f64656d616769632e696f2f617070732f3563666236303339303832343832303031396435616636622f3563666236303339303832343832303031396435616636612f7374617475735f62616467652e737667" alt="Codemagic build status" data-canonical-src="https://api.codemagic.io/apps/5cfb60390824820019d5af6b/5cfb60390824820019d5af6a/status_badge.svg" style="max-width:100%;"></a>
            <a href="https://pub.dartlang.org/packages/theme_provider" rel="nofollow"><img src="https://camo.githubusercontent.com/aeb73bfce6619e8ddbbfd5071c12d822b4fffa83/68747470733a2f2f696d672e736869656c64732e696f2f7075622f762f7468656d655f70726f76696465722e737667" alt="Pub Package" data-canonical-src="https://img.shields.io/pub/v/theme_provider.svg" style="max-width:100%;"></a></p>
           
            <strong>An easy to use, customizable Theme Provider plugin for 
            <a href='https://flutter.dev' target='_blank' rel="noopener">Flutter </a> </strong>
            <br />
            This provides app color schemes throughout the app 
            and automatically rebuilds the UI dynamically. 
            This can also persist the current color theme. This package provides several 
            widgets that can help to easily add theme switching 
            abilities.
            <br />
            <br />
            <a href='https://pub.dev/packages/theme_provider' target='_blank' rel="noopener">
               Package Home Page (Dart Pub)</a>
            <br />
            <a href='https://github.com/kdsuneraavinash/theme_provider' target='_blank' rel="noopener">
                Github Repository
            </a>
            `
    },
    {
      title: `MediKit WebApp & MobileApp - Semester 3 Group Project | Managing health-care services | e-prescriptions`,
      team: [TeamMate.sunera(), TeamMate.anju(), TeamMate.lahiru()],
      content:
        `
            <strong>Pulse Health-care is a project initiated by the team Pulse with the intention of improving 
            the doctor-patient interconnection and computerizing the health-care system. </strong><br/>
            The main function of the platform is managing and storing medical data. 
            Other than that the platform provides various type of services to its clients 
            including doctor management facility and other medical center oriented facilities. 
            <br/>
            <br/>
            <strong> This was a project done for semester 3 module Object-Oriented Software Development (17-S3-CS2062)</strong>
            <br/>
            <br/>
            <a href="https://github.com/kdsuneraavinash/pulse-healthcare" target="_blank" rel="noopener">Github Repository</a>
            <br/>
            <br/>
            <img src="https://github.com/kdsuneraavinash/pulse-healthcare/raw/master/web/screenshots/home_page.png" class="img-fluid d-none d-md-block" alt="Screenshots">
            `
    },
    {
      title: `OS Scheduler Algorithm Simulator`,
      content:
        `
            This is a simple web app/electron app to simulate the OS scheduler algorithms such as Round Robin/SJF/FCFS/SRTF. 
            Uses canvas drawings and charts to demonstrate various statistics related to simulation.

            <br/>
            <br/>
            <strong> This was a project done for semester 3 module Operating Systems (17-S3-CS2042)</strong>
            <br/>
            <br/>
            <a href="https://github.com/kdsuneraavinash/os-scheduler" target="_blank" rel="noopener">Github Repository</a>
            <br/>
            <a href="https://kdsuneraavinash.github.io/os-scheduler/" target="_blank" rel="noopener">Online Test Site</a>
            <br/>
            <br/>
            <img src="https://github.com/kdsuneraavinash/os-scheduler/raw/master/readme.gif" class="img-fluid d-none d-md-block" alt="Screenshot">
            `
    },
    {
      title: `Decrypt 2.0 Website`,
      team: [TeamMate.sunera(), TeamMate.rumesh()],
      content:
        `
            Website for decrypt event 2019 organized by CSE17.
            <br/>
            <br/>
            <a href="https://decrypt-cse.com" target="_blank" rel="noopener">Visit Website</a>
            `
    },
    {
      title: `Capsolat`,
      content:
        `
            Designed the front end for a startup for a matrimonial web site.
            This is a Matrimonial Ad Portal where people can publish their Ad faster.
            <br/>
            <br/>
            <a href="https://capsolat.com/" target="_blank" rel="noopener">Visit Website</a>
            `
    },
    {
      title: `Piano Tiles Bot - Open Source Project`,
      content:
        `
            A hobby project I did which captures a window from an emulator and uses openCV to process the image and press according keys. 
            This bot was intended to play piano tiles game and can reach 4000+ scores easily.
            <br/>
            <br/>
            <a href="https://github.com/kdsuneraavinash/python-projects/tree/master/piano-tile-bot" target="_blank" rel="noopener">Github Repository</a>
            <br/>
            <br/>
            <div class="embed-responsive embed-responsive-16by9 img-fluid d-none d-md-block">
            <video loop controls class="embed-responsive-item">
                <source src="https://github.com/kdsuneraavinash/python-projects/blob/master/piano-tile-bot/result/PianoTiles.2.2.mp4?raw=true" type="video/mp4">
            </video>
            </div>
            `
    },
    {
      title: `Nano Processor - VHDL`,
      team: [TeamMate.sunera(), TeamMate.anju()],
      content:
        `
            <strong>Nano-processor Project for 17-S2-CS2052 Computer Architecture</strong>
            <br/>
            This is a VHDL implementation of a nano-processor which can execute 8 different commands.
            <br/>
            <br/>
            <a href="https://github.com/kdsuneraavinash/nanoprocessor" target="_blank" rel="noopener">Github Repository</a>
            <br/>
            <br/>
            <img src="https://github.com/kdsuneraavinash/nanoprocessor/raw/master/design.png" class="img-fluid d-none d-md-block" alt="Design">
            `
    },
  ];
}
