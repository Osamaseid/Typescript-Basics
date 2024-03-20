interface Student {
    firstName: string;
    lastName: string;
    dept: string;
    fullName: () => string;
  }
  
  const student: Student = {
    firstName: "Osama",
    lastName: "Seid",
    dept: "Software",
    fullName: function() {
      console.log("The name of the student");
      return this.firstName + " " + this.lastName;
    }
  };
  
  const studentInfo: string = student.fullName();
  console.log(studentInfo);