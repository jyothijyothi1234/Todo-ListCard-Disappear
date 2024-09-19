import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Appli() {
  const [title, setTitle] = useState("");
  const [descp, setDescp] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data.length<4) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [data]);

  return (
    <Grid container xs={12}>
      <Grid container item xs={12} sx={{ display: show ? "flex" : "none" }}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
        >
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            onChange={(e) => setDescp(e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "220px",
              height: "50px",
            }}
            onClick={() => {
              setData([...data, { title, descp }]);
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      {data.map((item) => (
          <Card title={item.title} descp={item.descp} />
        ))}
    </Grid>
  );
}

function Card(Props) {
  return (
    <Grid container  >
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "green",
          marginTop: "20px",
          marginBottom: "30px",
          marginLeft: "200px",
        }}
      >
        <h3> {Props.title}</h3>
        <p>{Props.descp}</p>
      </Grid>
    </Grid>
  );
}

export default Appli;
