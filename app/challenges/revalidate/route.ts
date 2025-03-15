import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function GET() {
  revalidatePath('/challenges');
  redirect('/');
}
