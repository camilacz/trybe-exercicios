export default class Student {
  private _name: string;

  private _enrollment: string;

  private _examsGrades: number[];

  private _projectsGrades: number[];

  constructor(name: string, enrollment: string) {
    this._name = name;
    this._enrollment = enrollment;
    this._examsGrades = [];
    this._projectsGrades = [];
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres');
    this._name = value;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value) {
      this._enrollment = value;
    }
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(values: number[]) {
    if (values.length > 4) throw new Error('O(A) estudante só pode ter 4 notas de provas');
    this._examsGrades = values;
  }

  get projectsGrades(): number[] {
    return this._projectsGrades;
  }

  set projectsGrades(values: number[]) {
    if (values.length > 2) throw new Error('O(A) estudante só pode ter 2 notas de trabalhos');
    this._projectsGrades = values;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._projectsGrades].reduce((acc, grade) => acc + grade, 0);
  }

  getAverageGrade(): number {
    const sum: number = this.sumGrades();
    const length: number = this._examsGrades.length + this._projectsGrades.length;

    return Math.round(sum / length);
  }
}
