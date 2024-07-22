'use server';

import { currentUser } from "@/app/data/auth";
import { createClient } from "@/lib/supabase/server";

export const createItem = async (formData: {name: string, amount: number}) => {
  const supabase = createClient();

  const user = currentUser();

  if (!user) {
    throw new Error('login');
  }

  const { error } =  await supabase.from('items').insert(formData);

  if (error) {
    throw new Error(error.message);
  }
  
}