'use server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'

export async function addStudent(prevState: any, formData: FormData) {
    // KAN IKKE FINNES FRA FØR AV; KAN IKKE FINNE STUDENTEN;

    const match = await prisma.enrollment.findMany({where: {AND: [{ studentId: parseInt(formData.get('studentId') as string) }, { subjectId: parseInt(formData.get('subjectId') as string) }]}})

    if (
        (!match.length) &&
        (await prisma.students.findUnique({where: { id: parseInt(formData.get('studentId') as string) }}))
    ) {
        return
    } else {
        return {
            message: 'Kunne ikke legge til eleven'
        }
    }

    // const studentId = parseInt(formData.get('studentId') as string);
    // const subjectId = parseInt(formData.get('subjectId') as string);

    // if (!studentId || !subjectId) {
    //     throw new Error('Both studentId and subjectId are required.');
    // }

    // const existingEnrollment = await prisma.enrollment.findUnique({
    //     where: { id: studentId && subjectId }
    // });

    // if (existingEnrollment) {
    //     throw new Error('Enrollment already exists for the given studentId and subjectId.');
    // }

    // const existingStudent = await prisma.students.findUnique({
    //     where: { id: studentId }
    // });

    // if (!existingStudent) {
    //     throw new Error('Student does not exist.');
    // }

    // await prisma.enrollment.create({
    //     data: {
    //         studentId: studentId,
    //         subjectId: subjectId,
    //         grade: 0
    //     }
    // });

    // revalidatePath(formData.get('path') as string);
    
}