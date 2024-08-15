'use client'
import Image from "next/image";
import getStripe from '@/utils/get-stripe';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import { Box, Container, Typography, Head, AppBar, Toolbar, Button } from "@mui/material";

export default function Home() {
  return (

      <Box>
        <Head>
          <title>Flashcard SaaS</title>
          <meta name="description" contents="Create flashcard from your text"/>
        </Head>
        <p>hrtiugbfjklg</p>
      </Box>

  );
}
