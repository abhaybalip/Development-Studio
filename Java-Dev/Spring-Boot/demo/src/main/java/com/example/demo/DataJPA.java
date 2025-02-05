package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; // Use CommandLineRunner
import org.springframework.stereotype.Component; // Import for SpringApplication
import org.springframework.stereotype.Repository; // Import for SpringBootApplication

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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

// DataJPA Manager 
@Component // Mark DataJPA as a component
class DataJPA {

    private final PersonService personService;

    @Autowired // Inject PersonService
    public DataJPA(PersonService personService) {
        this.personService = personService;
    }

    public void run() {
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
