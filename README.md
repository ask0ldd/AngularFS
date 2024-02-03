## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Memo

CLI :

ng new: Used to create a new Angular project
ng serve: This command is used to serve the application locally for development
ng generate: It is used to generate different parts of an Angular application, such as components, services, modules, and more
ng build: This command is used to build the application for production deployment
ng test: Used to run unit tests for the application
ng lint: It is used to lint the application code for potential errors and code style issues

ng generate component <component-name> or ng g c <component-name>
ng generate service <service-name> or ng g s <service-name>

---

ng directive :

Angular has built-in directives such as ng-init, ng-model, ng-if, and ng-for, and it also allows you to define your own custom directives. Directives are a fundamental concept in Angular development and are used to extend HTML with new attributes, thereby enhancing the functionality of applications.

---

ng modules :

organize the complex relationships between views, such as components, directives, and data providers, into cohesive blocks of functionality. NgModules configure the injector and the compiler, help organize related things together, and are used to group interrelated sets of Angular components, directives, and pipes that are meant to be used together. They are also used to split an application into smaller parts and to lazy load each part separately, as well as to create libraries of components that can be easily imported into other applications.

---

ng guards :

Guards are used to add checks to restrict access to certain pages on a website, and they can be created using the command "ng generate guard guard-name" with various flags such as --implements and --flat. Guards are typically used for implementing route protection and can be of different types, such as CanActivate, CanActivateChild, and CanLoad

---

ng pipes :
feature that allows you to transform and format data directly in your templates. Pipes are simple functions used in template expressions to accept an input value and return a transformed value. They can be used to transform strings, currency amounts, dates, and other data for display. Angular comes with many built-in pipes, such as DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe, and DecimalPipe. Additionally, you can create custom pipes to suit your specific requirements. Pipes can be classified into pure pipes, which are called only when Angular detects a change in the input value, and impure pipes, which are called for every change detection cycle regardless of the change in the input fields

---

ng services :

An Angular service is a TypeScript class with the @Injectable decorator that can be injected into any component, directive, or another service. It is a fundamental part of building applications with Angular, used to encapsulate and share logic, data, and functions across different parts of an application. Services are singleton objects, meaning they are instantiated only once during the lifetime of an application, and they can hold and maintain data throughout the life of the application. They help organize code, separate concerns, and increase modularity,

---

ng serviceworkers :

A service worker in the context of Angular is a script that runs in the web browser and manages caching for an application. It functions as a network proxy, allowing the application to intercept and handle network requests, including caching resources for offline use. In Angular, service workers are used to improve performance, provide offline capabilities, and enhance the overall user experience. They are particularly useful for tasks such as data retrieval, caching, and logging, and are considered a powerful tool for building complex applications

---

ng library :

An Angular library is a reusable collection of code that can be shared across Angular projects. It differs from an application in that it cannot run on its own and must be imported and used in an Angular application. Angular libraries are typically published as npm packages, often including schematics that integrate them with the Angular CLI

---
