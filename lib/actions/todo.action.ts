"use server";

import { revalidatePath } from "next/cache";
import { db } from "../prisma";

export async function getAllTodo({ email }: { email: any }) {
 try {
  const res = await db.todos.findMany({
   where: {
    email,
   },
   orderBy: {
    createdAt: "asc",
   },
  });
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}
export async function getAllImportantTodo({ email }: { email: any }) {
 try {
  const res = await db.todos.findMany({
   where: {
    email,
    isImportant: true,
   },
   orderBy: {
    createdAt: "asc",
   },
  });
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}
export async function getAllCompleteTodo({ email }: { email: any }) {
 try {
  const res = await db.todos.findMany({
   where: {
    email,
    isCompleted: true,
   },
   orderBy: {
    createdAt: "asc",
   },
  });
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}

interface Todo {
 isImportant: boolean;
 task: string;
 email: string;
}

export async function addTodo({ email, isImportant, task }: Todo) {
 try {
  const res = await db.todos.create({
   data: {
    task,
    email,
    isImportant,
   },
  });

  revalidatePath("/dashboard");
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}
type EditTodo = {
 isImportant: boolean;
 task: string;
 id: string;
};
export async function editTodo({ id, isImportant, task }: EditTodo) {
 try {
  const res = await db.todos.update({
   where: {
    id,
   },
   data: {
    task,
    isImportant,
   },
  });
  revalidatePath("/dashboard");
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}

export async function completeTask({ id }: { id: string }) {
 try {
  const res = await db.todos.update({
   where: {
    id,
   },
   data: {
    isCompleted: true,
   },
  });
  revalidatePath("/dashboard");
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}
export async function deletedTask({ id }: { id: string }) {
 try {
  const res = await db.todos.delete({
   where: {
    id,
   },
  });
  revalidatePath("/dashboard");
  return res;
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}

export async function allUsers() {
 try {
  const res = await db.todos.findMany({
   orderBy: {
    createdAt: "asc",
   },
  });
  const userRes = await db.user.findMany();
  return {
   totalTodo: res.length,
   totalUser: userRes.length,
  };
 } catch (error: any) {
  console.log("Failed to fetch users :" + error.message);
 }
}
