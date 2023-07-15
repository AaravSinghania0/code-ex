## Code Execution Web App

-   Visit [http://code-executive.vercel.app](http://code-executive.vercel.app)

-   This is a web application that allows you to upload and execute multiple code files. It provides detailed reports on the output or errors produced by each file.

-   To try out this app, you can download and modify the sample code files are provided inside the `Demo Files` folder.

### Tech Stack

The following technologies and libraries are used in this application:

-   Next.js (React.js framework)
-   Tailwind CSS
-   Daisy UI
-   Piston API (Piston Node Client)

### Steps to Try the Web App

To try this web application, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/AaravSinghania0/code-ex.git
    cd code-ex

    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn add
    # or
    pnpm install
    ```
3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Upload code files by clicking on the "Upload Files" button and selecting the desired files.

6. Click on the "Execute" button to run the uploaded files. The app will display the status for execution reports for each file.

7. Before executing, you can delete individual files, or delete all files by clicking on the trash icon.

8. If the reports are generated, you can download individual reports by clicking on the download icon next to them, or download all reports together in a zip file using the "Download All" button.

### Please Note

-   To see a list of all the supported languages, their versions and aliases, go to `runtimes.js` in the main directory.
-   As of now, this app does not support parameterized codes (i.e. codes requiring user input).

### Credits

This project is built using the following sources:

-   [Piston API](https://github.com/engineer-man/piston/)
-   [Piston Node Client](https://github.com/dthree/node-piston)
