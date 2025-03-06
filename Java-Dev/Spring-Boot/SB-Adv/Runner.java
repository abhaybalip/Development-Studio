import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class CommandLineRunnerExample {

    public static void main(String[] args) {
        SpringApplication.run(CommandLineRunnerExample.class, args);
    }

    @Component
    public static class MyCommandLineRunner implements CommandLineRunner {

        @Override
        public void run(String... args) throws Exception {
            System.out.println("CommandLineRunner executed!");
            if (args.length > 0) {
                System.out.println("Arguments:");
                for (String arg : args) {
                    System.out.println("- " + arg);
                }
            } else {
                System.out.println("No command-line arguments provided.");
            }
        }
    }
}
