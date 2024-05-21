import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const persons = new Person();
const programstart = async (persons) => {
    do {
        console.log("=========================================================================================");
        console.log("\t\t\t\t\t Welcome");
        console.log("========================================================================================");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "What do you want to do?",
                choices: ["staff", "student", "Exit"],
            },
        ]);
        if (ans.select == "staff") {
            console.log("You are in the staff section feel free to ask any question");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "Enter the student name you wish to engage with:",
                },
            ]);
            const student = persons.student.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name} Nice to meet you!`);
                console.log(`New student Added`);
                console.log("Current Students List");
                console.log(persons.student);
            }
            else {
                console.log(`Hello I am ${student.name} Nice to see you again!`);
                console.log("Student already exist");
                console.log("Existing Students List:");
                console.log(persons.student);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting the program....");
            process.exit(0);
        }
    } while (true);
};
programstart(persons);
