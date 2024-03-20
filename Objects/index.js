var student = {
    firstName: "Osama",
    lastName: "Seid",
    dept: "Software",
    fullName: function () {
        console.log("The name of the student");
        return this.firstName + " " + this.lastName;
    }
};
var studentInfo = student.fullName();
console.log(studentInfo);
