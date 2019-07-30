export class Education {
  constructor(public title: string, public location: string, public period: string, public content: string, public image: string) {
  }

  public static readonly data: Education[] = [
    {
      title: "UNDERGRADUATE, BACHELOR OF SCIENCE",
      location: "University of Moratuwa",
      period: "2017 - Current",
      image: "assets/university.jpg",
      content:
        `Undergraduate, Bachelor of Science, Computer Science and Engineering, University of Moratuwa.
            <br/> 
            Current SGPA: 4.11
            <br/>
            <strong>Dean's List: Semester 1, Semester 2<strong><br/>
           `
    },
    {
      title: "GCE ADVANCED LEVEL EXAMINATION",
      location: "Kalutara Vidyalaya - National School",
      period: "2003 - 2016",
      image: "assets/kvns.jpg",
      content:
        `
            All A Passes in Physical Sciences Stream<br/> 
            Island rank 76th, District Rank 2nd, Z Score 2.680
            `
    },
  ];
}
