import prisma from '@/lib/prisma';

export async function GET(req: Request) {
    const projects = await prisma.project.findMany();
    return new Response(JSON.stringify(projects), { status: 200 });
}

export async function POST(req: Request) {
    const body = await req.json();
    const newProject = await prisma.project.create({
        data: body,
    });
    return new Response(JSON.stringify(newProject), { status: 201 });
}
