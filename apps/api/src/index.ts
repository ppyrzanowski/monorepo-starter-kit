import app from "./server.js";

const port = process.env.PORT ?? '8081';


app.listen(port, () => {
    console.log("Server listen on port: " + port);

}).on('error', (err: Error): void => {
    console.log('Server cannot start', {err});
    process.exit(1);
});
