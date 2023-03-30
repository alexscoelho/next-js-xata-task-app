import { getXataClient, Task } from "../../../src/xata";
const xata = getXataClient();

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const task: Task = await request.json();
  const record = await xata.db.task.create(task);
  return NextResponse.json(record);
}

export async function PUT(request: Request) {
  const task: Task = await request.json();
  const record = await xata.db.task.update(task);
  return NextResponse.json(record);
}
