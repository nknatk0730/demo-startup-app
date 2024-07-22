'use client'

import { createItem } from "@/actions/item";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  amount: z.coerce.number().min(1),
  name: z.string().min(1).max(255),
})

type FormData = z.infer<typeof formSchema>

export const ItemForm = () => {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      amount: 0,
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    createItem(data)
      .then(() => {
        toast({
          title: "success post",
          description: "check item list",
        });
      })
      .catch(() => {
        toast({
          title: "error",
          description: "check input",
          variant: 'destructive',
        });
      });

    form.reset();
  };

  const errorLog = () => alert('error');

  return (
    <div className="p-6">
      <h1>My Page</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, errorLog)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>item</FormLabel>
                <FormControl>
                  <Input placeholder="rice" {...field} />
                </FormControl>
                <FormDescription>
                  under 255 
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>price</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormDescription>
                  over 0 
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">add</Button>
        </form>
      </Form>
    </div>
  );
}