'use server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'

export async function addStudent(prevState: any, formData: FormData) {
    try {
        const match = await prisma.enrollment.findMany({
            where:
                {AND:
                    [
                        { studentId: parseInt(formData.get('studentId') as string) },
                        { subjectId: parseInt(formData.get('subjectId') as string) }
                    ]
                }
            })

        if ((!match.length)) {
                if (await prisma.students.findUnique({where: { id: parseInt(formData.get('studentId') as string) }})) {
                    await prisma.enrollment.create({
                        data: {
                            studentId: parseInt(formData.get('studentId') as string),
                            subjectId: parseInt(formData.get('subjectId') as string),
                            grade: 0
                        }
                    });

                    revalidatePath(formData.get('path') as string);

                    return {
                        message: '',
                        success: true
                    }
                } else {
                    return {
                        message: 'Eleven finnes ikke'
                    }
                }
        } else {
            return {
                message: 'Eleven er allerede lagt til'
            }
        }
    } catch (error) {
        console.error(error);
        return {
            message: 'Kunne ikke legge til eleven',
            success: false
        }
    }
}

export async function changeGrade(prevState: any, formData: FormData) {
    try {
        if (
            parseInt(formData.get('grade') as string) >= 1 && parseInt(formData.get('grade') as string) <= 6
        ) {
            const enrollmentId = await prisma.enrollment.findMany({
                where: {
                    AND: [
                        { studentId: parseInt(formData.get('studentId') as string) },
                        { subjectId: parseInt(formData.get('subjectId') as string) }
                    ]
                }
            })
            
            await prisma.enrollment.update({
                where: {
                    id: enrollmentId[0].id
                },
                data: {
                    grade: parseInt(formData.get('grade') as string)
                }
            })
            
            revalidatePath(formData.get('path') as string);
            
            return {
                message: '',
                success: true
            }
        } else {
            return {
                message: 'Ugyldig karakter'
            }
        }
    } catch (error) {
        console.error(error);
        return {
            message: 'Kunne ikke endre karakter',
            success: false
        }
    }
}

export async function newStudent(prevState: any, formData: FormData) {
    return {
        message: 'YEah',
        success: true
    }
}