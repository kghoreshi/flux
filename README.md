# Flux Notes&trade; Prototype

## Features

This prototype is designed to demonstrate the concept of a clinician entering or dictating a clinical note that includes structured data embedded within it. A patient summary is shown for reference during the authoring of new clinical notes and provide incentive to identifying structured data during note authoring and review. The clinican can leverage templates for note creation. When authoring a note and within a structured field, Flux Notes&trade; displays a simple "point-of-sale" inspired "form" for choosing values that are part of the current structured field.

In addition, a no-patient version of the above concept has been created for situations where EHR integration is not possible and to facilitate use at hospitals without requiring installation. In no-patient mode, the clinician choosing the type of data being authored and then uses the point-of-sale form from above to author the content which produces the equivalent structured field text that can be pasted into their EHR's note entry area as part of authoring a clinical note.

## Getting Started

* Ensure that the following are installed: 

    - [Git](https://git-scm.com/downloads);
    - [Node.js](https://nodejs.org/en/) **(LTS version v10.14.1)** ;
      - If Node Package Manager was not installed with Node, make sure to also install [NPM](https://www.npmjs.com/get-npm).
    - and [Yarn](https://yarnpkg.com/en/docs/install).

* Git clone the repository
    * If proxy issues are encountered, make sure to set HTTP_PROXY and HTTPS_PROXY environment variables.

* Check out the master branch (or the branch you want to work in)

* In a terminal navigate into the flux folder (stay at the project root)

* Enter `yarn install`
    * If proxy issues are encountered, make sure to set npm config proxy variables.  Type these commands into your terminal:
        ```bash
        npm config set https-proxy <proxy-server-url>:<port>
        npm config set proxy <proxy-server-url>:<port>
        ```

* Enter `yarn start` to launch the development web server and open a browser to view the application

* To view patient mode, append patient to the end of the default url (result url would be <http://localhost:3000/demo1>)

## Technical Details

For more details on the technologies used see the wiki page at <https://github.com/standardhealth/flux/wiki/Flux-Capture-Prototype-%28Flux-Notes%29>

## Parsing notes

A note parser can also be executed (local command line - not a web application) by (assuming the above Getting Started steps have been executed successfully):

* Enter `yarn parse <path to note txt file or directory of files>`

For example:

* Enter `yarn parse ./src/noteparser/samples`

will parse all the sample notes in the samples directory. To only parse note 4:

* Enter `yarn parse ./src/noteparser/samples/note4.txt`

If a directory is specified, every file in that directory will be treated as a note and parsing will be attempted.

## Patient Date Update

This patient date updater is designed to change all of the dates in each of the entries in a patient JSON.  One of the parameters passed to the app is the entryid of an encounter.  The tool will calculate the difference of the current date and the date of the encounter and will add that difference to all of the dates.

The patient date updater can be executed (local command line) by running the following command:

```bash
yarn patient-date-update <path-to-patient-json> <encounter-entryid>
```

* The program expects the JSON file provided to be an array of SHR entries.
* The program will overwrite the file that was passed in and will create a backup using the same path but adding `'.backup'` to the end.
  * For example, the backup file that will be created for `HardCodedPatientMidYearDemo18.json` will named `HardCodedPatientMidYearDemo18.json.backup`.

For example:

```bash
yarn patient-date-update ./src/dataaccess/HardCodedPatientMidYearDemo18.json 100
```

will search the patient entries for an `EncounterRequested` with an `entryid` of 100.  It will then use the `ActionContext.ExpectedPerformanceTime.Value` to calculate the difference to add to the dates.

## Testing

For docs on writing new tests, [see here in our wiki](https://github.com/standardhealth/flux/wiki/Testing#writing-tests). To run tests, go into the central project directory and run:

```bash
yarn test
```

This command will determine your machine's OS and run all possible tests. When in development, individuals can run front end tests with `yarn test-ui` and backend tests with `yarn test-backend`.

**Required Extra Steps**: Due to quirks in the libraries we're using, there are few things to do in order for all tests to pass:

1. Run `yarn start` in another terminal before running `yarn test`. Some ui-tests will fail because it takes longer for the site instance to spin up than it takes for the tests to start.
2. Ensure that all browsers' testing windows are open while the tests are running. TestCafe has been known to have some issues if those windows are minimized, possibly causing some tests to fail when they shouldn't.
3. Zoom out ridiculously far out on the ui-test's browser windows once they open. There are currently some issues we have with the our fixed copy-button that cause some tests to fail if the

**Other Known Issues:**

* *Using Git Bash on Windows?* It may look like the test aren't working on your machine. Hit enter a second time after running your yarn test command. The specifics of why this happens are still unknown, but this should help when running your tests.

## Using the REST API

To use the REST API to retrieve application data, you need to clone the shr-node-server [repository](https://github.com/standardhealth/shr-node-server) and follow the instructions there to run the server.

While the server is running, you can access a version of the Flux Application that uses the REST API by navigating to `/p2`.

NOTE: The REST API is still in development and will continue to change. Processes for changing the API and its implementations are outlined in the respective repositories, which can be found at the Standard Health Record Collaborative GitHub project, [here](https://github.com/standardhealth).
