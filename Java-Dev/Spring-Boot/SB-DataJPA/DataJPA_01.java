
package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// DataJPA Manager 
@Component
@SuppressWarnings("unused")
class DataJPA implements ApplicationRunner {

    private final PersonService personService;

    @Autowired
    public DataJPA(PersonService personService) {
        this.personService = personService;
    }

    @Override  // Important: Add the @Override annotation
    public void run(ApplicationArguments args) throws Exception { // Add ApplicationArguments parameter
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);

        personService.save(person1);
        personService.save(person2);

        System.out.println("All persons:");
        personService.findAll().forEach(System.out::println);

        System.out.println("Person with ID 1:");
        System.out.println(personService.findById(1L));

        personService.deleteById(1L);

        System.out.println("All persons after deleting person with ID 1:");
        personService.findAll().forEach(System.out::println);
    }
}

// DataBase Entity 
@Entity
class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;

    public Person() {
    } // No-argument constructor (JPA requirement)

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters and setters (essential!)
    // ... (Getters and Setters are the same as your code)
    @Override
    public String toString() {
        return "Person [id=" + id + ", name=" + name + ", age=" + age + "]";
    }
}

// DataBase Repository 
@Repository
interface PersonRepository extends JpaRepository<Person, Long> {
}

// DataBase Serqvice Provider 
@Component
class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Iterable<Person> findAll() {
        return personRepository.findAll();
    }

    public Person save(Person person) {
        return personRepository.save(person);
    }

    public void deleteById(Long id) {
        personRepository.deleteById(id);
    }

    public Person findById(Long id) {
        return personRepository.findById(id).orElse(null);
    }
}
