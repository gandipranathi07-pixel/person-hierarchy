import React from "react";
import "./App.css";

/* ========== Base Class ========== */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Hello, my name is ${this.name}.`;
  }
}

/* ========== Student Class (inherits Person) ========== */
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  // Method Overriding (Polymorphism)
  getDetails() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

/* ========== Teacher Class (inherits Person) ========== */
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding (Polymorphism)
  getDetails() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

/* ========== Create Objects ========== */
const people = [
  new Person("Alex Johnson", 30),
  new Student("Emma Watson", 20, "Computer Science"),
  new Teacher("Dr. James Wilson", 45, "Mathematics")
];

/* ========== React UI ========== */
function App() {
  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} className="card">
          <h2>
            {person.name} ({person.constructor.name})
          </h2>

          <p><strong>Age:</strong> {person.age}</p>

          <p className="italic">{person.getDetails()}</p>

          {/* Extra details for subclasses */}
          {person instanceof Student && (
            <p><strong>Major:</strong> {person.major}</p>
          )}

          {person instanceof Teacher && (
            <p><strong>Teaching:</strong> {person.subject}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;

