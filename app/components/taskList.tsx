"use client";

import * as React from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "@/src/model/Task";
import { updateTask } from "@/src/services/TaskService";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleUpdate = (task: Task) => {
    updateTask(task);
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <Grid container justifyContent="center" marginTop={3}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {isPending && <CircularProgress />}
        {tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.id}`;

          return (
            <ListItem
              key={task.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => handleUpdate(task)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={task.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}
