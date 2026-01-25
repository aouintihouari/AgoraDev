"use client";

import { Path, useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";

import { AskQuestionSchema } from "@/lib/validations";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: standardSchemaResolver(AskQuestionSchema),
    defaultValues: { title: "", content: "", tags: [] },
  });

  const handleCreateQuestion = async () => {};

  return (
    <Form {...form}>
      <form className="flex w-full flex-col gap-10" onSubmit={form.handleSubmit(handleCreateQuestion)}></form>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-medium text-foreground">
              Question title <span className="text-primary-500">*</span>
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                className="paragraph-regular dark:bg-dark-400 light-border-2 text-foreground no-focus rounded-1.5 min-h-12 border bg-amber-50"
              />
            </FormControl>
            <FormDescription className="body-regular text-light-500 mt-2.5">
              Be specific and imagine you&apos;re asking a question to another person
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-medium text-foreground">
              Detailed explanation of your problem <span className="text-primary-500">*</span>
            </FormLabel>
            <FormControl>Editor</FormControl>
            <FormDescription className="body-regular text-light-500 mt-2.5">
              Introduce the problem and expand on what you&apos; put in the title{" "}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col gap-3">
            <FormLabel className="paragraph-medium text-foreground">
              Tags <span className="text-primary-500">*</span>
            </FormLabel>
            <FormControl>
              <div>
                <Input
                  className="paragraph-regular no-focus light-border-2 min-h-14 border"
                  placeholder="Add tags..."
                  {...field}
                />
                Tags
              </div>
            </FormControl>
            <FormDescription className="body-regular text-light-500 mt-2.5">
              Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="mt-16 flex justify-end">
        <Button type="submit" className="primary-gradient text-light-900! w-fit">
          Ask Question
        </Button>
      </div>
    </Form>
  );
};

export default QuestionForm;
