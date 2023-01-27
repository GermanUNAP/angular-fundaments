const username = 'asdfad';
const sum = (a:number, b:number) =>{
  return a+b;
}
sum(1,2);

//clases
class Person {
  age: number;
  name: string;
  constructor(age: number, name: string){
    this.age = age;
    this.name = name;
  }
}
const german = new Person(3, 'German');
