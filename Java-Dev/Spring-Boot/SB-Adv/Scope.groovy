import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.ApplicationScope;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.context.annotation.SessionScope;

// Singleton
@Component
public class SingletonBean {}

// Prototype
@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class PrototypeBean {}

// Request
@Component
@RequestScope
public class RequestBean {}

// Session
@Component
@SessionScope
public class SessionBean {}

// Application
@Component
@ApplicationScope
public class ApplicationBean {}

