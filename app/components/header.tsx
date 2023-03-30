"use client";

import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Header() {
  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={2}>
        <Link href="/">Add Task</Link>
      </Grid>
      <Grid item xs={2}>
        <Link href="/tasks">Tasks</Link>
      </Grid>
    </Grid>
  );
}
