const student = {
    name: 'masud',
    money: 5000,
    study: 'bbs',
    subject: ['accounting', 'management', 'economics'],
    exam: function(){
        return this.name + 'is attending in the exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('economics');
// console.log(reExam);
const remaining = student.treatDey(900);
// console.log(remaining);