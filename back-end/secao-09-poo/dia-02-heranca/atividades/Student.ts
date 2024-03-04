import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string; 
    private _examsGrades: number[] = []; 
    private _assignmentsGrades: number[] = [];
  constructor( 
    name: string, 
    birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateMatricula();
    };

    get enrollment() {
      return this._enrollment;
    };

    set enrollment(newEnrollment: string) {
      this._enrollment = newEnrollment;
    }

    get examsGrades() {
      return this._examsGrades;
    };

    set examsGrades (newGrades: number[]) {
      if(newGrades.length !== 4) throw new Error('É necessario 4 notas prova');
      this._examsGrades = newGrades;
    }

    get assignmentsGrades() {
      return this._assignmentsGrades;
    };

    set assignmentsGrades(newGrades: number[]) {
      if(newGrades.length !== 2) throw new Error('É necessario 2 notas de trabalho');
      this._assignmentsGrades = newGrades
    }

    private sumGradesReduce(grades: number[]): number {
      const notas = grades.reduce((a, b) => {
        let sum = 0;
        sum = a + b;
        return sum;
      }, 0);
      return notas;
    }

    get sumGrades(): number {
      const total = this.sumGradesReduce(this._assignmentsGrades) + this.sumGradesReduce(this._examsGrades);
      return total;
    }

    get averageGrades(): number {
      const average = this.sumGrades / 6
      return average;
    }

    private generateMatricula(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

      return `STU${randomStr}`;
    }
}