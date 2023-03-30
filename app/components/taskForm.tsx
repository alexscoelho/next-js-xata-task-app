"use client";

import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import { createTask } from "@/src/services/TaskService";

import { useRouter } from "next/navigation";

const schema: RJSFSchema = {
  title: "Tasks",
  type: "object",
  required: ["title", "description"],
  properties: {
    title: { type: "string", title: "Title" },
    description: { type: "string", title: "Description" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const uiSchema: UiSchema = {
  description: {
    "ui:widget": "textarea",
  },
};

export default function TaskForm() {
  const router = useRouter();

  const onSubmit = async ({ formData }: any) => {
    const res = createTask(formData);
    router.push("/tasks");
  };

  return (
    <Form
      schema={schema}
      validator={validator}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
    />
  );
}
