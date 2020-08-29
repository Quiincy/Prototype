class Student {
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismiss;
    }
    get Info (){
        return `${this.fullName} is a ${this.course}-th grade student of ${this.university}`
    }
    get Marks() {
        return this.dismiss ? null : this.marks;
      }
    set Marks(mark) {
        return this.dismiss ? null : this.marks.push(mark);
      }
    get AverageMark(){
        return this.Marks.reduce((summ, current) =>{
            return  summ + current/this.marks.length;
           }, 0);
    
    }
    dismissed() {
        this.dismiss = true;
        return this.fullName
    }
    recovered(){
        this.dismiss = false;
        return this.fullName
      }
    
}

const student = new Student("Harvard University","3","Mark Zuckerberg");
console.log(student.Info);
console.log("Student's marks :", student.marks);
student.Marks = 5;
console.log("New marks list :", student.Marks);
console.log("Average mark :", student.AverageMark);
console.log("Student Dismissed :", student.dismissed());
console.log("NO marks cuz ve have NO student!", student.Marks);
console.log("Student Recovered :", student.recovered());





