'use client'
// import Image from "next/image";
// import getStripe from '@/utils/get-stripe';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import { TextField, Box, Container, Typography, Head, AppBar, Toolbar, Button } from "@mui/material";

export default function Home() {
  return (

    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Flashcards
        </Typography>
        <TextField
          label="Enter text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Generate Flashcards
        </Button>
      </Box>
      <UserButton />
      {/* We'll add flashcard display here */}
    </Container>

  );
}
