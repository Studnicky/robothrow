---

# robothrow Simulation Script

### Context

> Our product team has identified a unique opportunity in the market to create a simulation software for a ball launcher, which can be mounted onto our mobile robotic platform. The team has provided the following rendering and orthographic drawing of the ball launcher concept. We would like your help in designing and implementing this simulator.

### Assumptions

- The ball is electromagnetically held in firmly in place and can be released at any time.
- The motor that drives the arm can apply a torque up to `2 NM` (its continuous stall
  torque) until a maximum speed of `20 radians/second` is reached.
- The cylinder is made of 6061 aluminum alloy.
- The ball is made of solid 1018 steel.
- The weight of electronics and wiring is negligible.

### Acceptance Criteria

Your simulator should:

- [ ] Assist the Software team in modeling out launch distances as a function of the following factors: starting position, release position, and motor torque.
- [ ] Assist the Hardware team in choosing the right motor for the launcher by testing various possibilities for the motor’s torque and maximum speed and simulating how these values affect the ball’s maximum travel distance.

### Technical Criteria

- For your submission, feel free to use the language, framework, open-source libraries, and third-party tools of your choice; with that being said, please refrain from delivering a solution built using a Systems Engineering software (like Labview/Simulink) as the idea is to review your code.
- Please provide a way to interact with your simulator (e.g. a configuration file, CLI,
  GUI, etc) and instructions on how to run your submission.
- Submit your solution to [jobs@standardbots.com](mailto:jobs@standardbots.com)

---

## Running the project

1. Install Node.js

See https://nodejs.org

2. Install NPM packages

```bash
cd ~/robothrow
npm install
```

3. Set Config Options

This project requires configuration as an `.env` file. You must create one to proceed.
You may copy `.env.example` to configure the project for the sample run.

| First Header | Second Header                                                   |
| ------------ | --------------------------------------------------------------- |
| IMPORT_PATH  | Path to CSV file import, relative to project root               |
| EXPORT_PATH  | Export directory, relative to project root, default is `output` |
| FILE_NAME    | File name prefix for file write output; default is `report`     |

4. Running the Project

- Running as Server

To run the base project, simply invoke the npm default script.

```bash
npm start
```

- Running from command line:

  1. Assign filesystem permissions to allow the project source to be executable locally:

  ```bash
  chmod +x ./src/terminal.js
  ```

  2. Check that the configuration and input are correct.
     Terminal invokation requires a JSON structured file with an array of test cases.
     The import path may be specified via CLI args or .env file.

  ```bash
  # Import
  IMPORT_PATH=./input/singleCase.json
  ```

  3. Executing Terminal Invokation

  - Execute the default terminal invokation:

  ```bash
  npm run terminal
  ```

  - Execute custom terminal invokation:

  Execute with command line args by addressing the source executable directly with CLI args

  All available command line arguments use the same names as .env vars, but in camelCase - CLI args will take precedence over ENV args.
  Example: `IMPORT_PATH === importPath`

  ```bash
  ./src/terminal.js --importPath=./input/hundredCases.json
  ```

  4. Output will be found in the directory under the file name specified by the config

  ```bash
  # Export
  EXPORT_PATH=output
  FILE_NAME=test-run
  ```

#### Note

The project includes a sample config in the `./input` directory
