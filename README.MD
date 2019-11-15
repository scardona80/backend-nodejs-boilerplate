<h1>Backend Boilerplate Definition</h1>
<p>
The main objective of the definition of a boilerplate for the development of the backend, which is used in the different projects, is to establish a general structure that covers the general requirements of the same and serves as a basis for initiating the project, also seeks to have as an additional benefit, establish a general working methodology, facilitating the easy integration of new members to the projects, since the structure to be implemented (clean architecture), which is intuitive and clean, can be understood easily and also its structure lends itself to the easy scaling of any of the projects.

Some conventions are established, which seek to work general aspects in a homogeneous way between projects.

<p>
<h3>Conventions</h3>
<ul>
<li>All variable names, file names, etc. must be assigned English names.</li>
<li>Establish the name of the directories always used as plural (models, controllers, utils, middlewares...).</li>
<li>File names of the different directories always declared in singular (e.g. model: user, controller: role...).</li>
<li>Use of camelcase to assign names to declared variables.</li>
<li>Name of variables should always be the most descriptive, either giving an idea of its function or what data will be stored in it.</li>
<li>Perform the declaration of variables using the reserved words let or const, taking into account the purpose of that variable.</li>
<li>Constants that have a global character must be defined in capital letters (e.g. environment variables).</li>
<li>Avoid reassigning variables declared as constants.</li>
<li>Always opt, if supported, for the implementation of async - await.</li>
<li>Use objects to manage functions and variables between components. Perform the export of such objects and in the process of requiring functions or variables of that component, perform the destructuring of it and avoid importing all the data, which is not required at the time.</li>
<li>Implement the project with the use of eslint and prettier tools.</li>
</ul>
<h3>File Structure</h3>
<p>
├── config
│    └── index.js
├── lib
│    └── anyLibrary.js
├── routes
│    ├── someServiceRoutes.js
│    └── someOtherServiceRoutes.js
├── services
│    ├── anyService.js
│    └── anyOtherService.js
├── test
│    ├── routes.anyService.test.js
│    └── routes.anyOtherService.test.js
├── utils
│    ├── middlewares
│    │    ├── errorsHandler.js
│    │    ├── notFoundHandler.js
│    │    ├── scopeValidationHandler.js
│    │    └── validationdHandler.js
│    ├── mocks
│    │    ├── someData.js
│    │    └── someFunctions.js
│    ├── schemas
│    │    ├── anySchema.js
│    │    └── anyOtherSchema.js
│    ├── strategies
│    │     ├── jwt.js
│    │     └── basic.js
│    ├── anyUtility.js
│    └── anyOtherUtility.js
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
└── index.js
</p>
<ul>
<li><b>config</b>(directory): Contains all the configuration files which have ENV variables, database configuration options, API Key Token, default passwords, etc.</li>
<li><b>routes</b>(directory): Contains all the routes files for every service. Each route file have the different endpoints belonging to each service as well as the calling for authentication middlewares, data schemas validation middlewares, etc. Also, the request and response object needs to be handled inside the routes files in order to give the response from there. Routes files only calls for services and middlewares.</li>
<li><b>models</b>(directory):</li>
<li><b>services</b>(directory): Contains the service file for each service as well. Services files contains all the logic of the business and each service shall has its own independent file.</li>
<li><b>tests</b>(directory): Contains the testing files for every service. Each service must have at least an unit testing file.</li>
<li><b>utils</b>(directory): Contains files that could be called by another file if is required in order to make any specified function or to give some data. Utils directory usually have the following internal directories:
<ul>
    <li><b>middlewares<b>(directory): contains differents files which each one does differents functions. Middleware directory may have a file for errors handler middlewares, a file for data schema validation middlewares, a file for not found page handler middleware, etc.</li>
    <li><b>mocks</b>(directory): contains data (usually in json format) which could be required for testing purposes. Also, can contain files that may have functions that testing could require.</li>
    <li><b>schemas</b>(directory): contains files with the different schema that should have each entity of the database in order to make a correct CRUD to the database.</li>
    <li><b>strategies</b>(directory): contains files with differents authentication strategies, as well as JWT (Json Web Token) or basic strategies.</li>
</ul>
</li>
<li><b>.env</b>(file): File that will contain all the environment variables used either for the database connection, external apis calls, secrets for token encryption/decryption processes, among others.</li>
<li><b>.sequelizerc</b>(file): Contains object with the path to our config file use it by the ORM sequelize to connect to database and map or models. This file is required because by default sequelize use a config.json.</li>
<li><b>.eslintrc.json</b>(file): JSON file to specify configuration information for an entire directory and all of its subdirectories for use ESLint.</li>
<li><b>.gitignore</b>(file): File to specify intentionally untracked files that Git should ignore.</li>
<li><b>.prettierrc.json</b>(file): Configuration file will be resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn't) found.</li>
<li><b>index.js</b>(file):</li>
<li><b>package.json</b>(file): Lists of the packages that the project depends on. Specifies versions of a package that your project can use using semantic versioning rules. makes your build reproducible, and therefore easier to share with other developers.</li>
</ul>
