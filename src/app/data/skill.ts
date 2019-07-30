export class Skill {

  constructor(public imageUrl: string, public link: string, public progress: number, public title: string) {
  }
}

export class SkillGroup {

  constructor(public title: string, public skills: Skill[]) {
  }

  static readonly data = [
    {
      title: 'Languages',
      skills: [
        {
          imageUrl: "assets/python.svg",
          link: "https://www.python.org/",
          title: "Python",
          progress: 9
        },
        {
          imageUrl: "assets/java.svg",
          link: "https://www.java.com/en/",
          title: "Java",
          progress: 8
        },
        {
          imageUrl: "assets/dart.jpg",
          link: "https://dart.dev/",
          title: "Dart",
          progress: 8
        },
        {
          imageUrl: "assets/php.svg",
          link: "https://php.net/",
          title: "PHP",
          progress: 6
        },
        {
          imageUrl: "assets/js.svg",
          link: "https://www.javascript.com/",
          title: "JavaScript",
          progress: 6
        },
        {
          imageUrl: "assets/ts.svg",
          link: "https://www.typescriptlang.org/",
          title: "TypeScript",
          progress: 5
        },
        {
          imageUrl: "assets/html.svg",
          link: "https://whatwg.org/",
          title: "HTML5",
          progress: 8
        },
        {
          imageUrl: "assets/css.svg",
          link: "https://whatwg.org/",
          title: "CSS3",
          progress: 8
        },
        {
          imageUrl: "assets/cplusplus.svg",
          link: "https://isocpp.org/",
          title: "C++",
          progress: 4
        },
        {
          imageUrl: "assets/vb.png",
          link: "https://visualstudio.microsoft.com/",
          title: "VB.NET",
          progress: 8
        }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        {
          imageUrl: "assets/flutter.png",
          link: "https://flutter.dev/",
          title: "Flutter",
          progress: 9
        },
        {
          imageUrl: "assets/android.svg",
          link: "https://www.android.com/",
          title: "Android",
          progress: 4
        },
        {
          imageUrl: "assets/angular.svg",
          link: "https://angular.io/",
          title: "Angular",
          progress: 5
        },
        {
          imageUrl: "assets/bootstrap.svg",
          link: "https://getbootstrap.com/",
          title: "Bootstrap 4",
          progress: 8
        },
        {
          imageUrl: "assets/mdb.png",
          link: "https://mdbootstrap.com/",
          title: "MDBootstrap",
          progress: 8
        },
        {
          imageUrl: "assets/express.svg",
          link: "https://expressjs.com/",
          title: "ExpressJS",
          progress: 3
        },
        {
          imageUrl: "assets/node.svg",
          link: "https://nodejs.org/",
          title: "NodeJs",
          progress: 2
        },
        {
          imageUrl: "assets/opencv.png",
          link: "https://opencv.org/",
          title: "OpenCV",
          progress: 5
        },
        {
          imageUrl: "assets/tensorflow.png",
          link: "https://www.tensorflow.org",
          title: "TensorFlow",
          progress: 3
        }
      ]
    },
    {
      title: 'Database and Tooling',
      skills: [
        {
          imageUrl: "assets/mysql.svg",
          link: "https://www.mysql.com/",
          title: "MySql",
          progress: 5
        },
        {
          imageUrl: "assets/firebase.webp",
          link: "https://firebase.google.com/",
          title: "Firebase",
          progress: 5
        },
        {
          imageUrl: "assets/git.svg",
          link: "https://git-scm.com/",
          title: "Git",
          progress: 7
        }
      ],
    },
    {
      title: 'IDEs, Environments and Platforms',
      skills: [
        {
          imageUrl: "assets/github.svg",
          link: "https://github.com/",
          title: "GitHub",
          progress: 8
        },
        {
          imageUrl: "assets/vscode.png",
          link: "https://code.visualstudio.com/",
          title: "VS Code",
          progress: 9
        },
        {
          imageUrl: "assets/idea.png",
          link: "https://www.jetbrains.com/idea/",
          title: "IntelliJ",
          progress: 7
        },
        {
          imageUrl: "assets/linux.svg",
          link: "https://www.linux.org/",
          title: "Linux",
          progress: 6
        },
        {
          imageUrl: "assets/arduino.png",
          link: "https://www.arduino.cc/",
          title: "Arduino",
          progress: 7
        }
      ],
    }
  ];
}
