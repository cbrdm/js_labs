class Student {
  #visits = 0;

  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  get fullName() {
    return this._fullName || this.name;
  }

  set fullName(value) {
    this._fullName = value;
  }

  displayInfo() {
    console.log(`Student: ${this.fullName}, Grade: ${this.grade}, Visits: ${this.#visits}`);
  }

  incrementVisits() {
    this.#visits++;
  }

  static compareGrades(a, b) {
    return a.grade - b.grade;
  }
}

class GraduateStudent extends Student {
  #formatInfo() {
    return `Thesis: ${this.thesisTitle}`;
  }

  constructor(name, grade, thesisTitle) {
    super(name, grade);
    this.thesisTitle = thesisTitle;
  }

  displayInfo() {
    super.displayInfo();
    console.log(this.#formatInfo());
  }
}

Array.prototype.avg = function () {
  return this.reduce((a, b) => a + b, 0) / this.length;
};

const st1 = new Student("Ivan", 85);
const st2 = new Student("Oleh", 92);

st1.fullName = "Ivan Petrenko";
st1.incrementVisits();
st1.incrementVisits();

st1.displayInfo();

console.log("Sorted by grades:", [st1, st2].sort(Student.compareGrades));

const gs = new GraduateStudent("Maria", 95, "AI in Modern Education");
gs.displayInfo();

console.log([10, 20, 30].avg());
