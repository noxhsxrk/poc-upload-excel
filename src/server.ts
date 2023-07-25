import app from "./app";

const port = 8443;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
