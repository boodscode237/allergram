import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddAllergies = ({ makeAllergy }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  // const handleAllergies = (e) =>
  const createTodo = (e) => {
    e.preventDefault();
    setText("");
    makeAllergy(text);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={createTodo}>
          <FormControl fullWidth={true}>
            <TextField
              label="Add an allergy"
              variant="standard"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 5, color:"#FEC56E", backgroundColor:"#0D163B" }}
            >
              <Add />
              Add Allergies
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default AddAllergies;
