'use client'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import FormInput, {InputType} from "@/components/Form/FormInput";
import Form from "@/components/Form/Form";

export default function CreateProjectPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/projects/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, description}),
            });

            if (response.ok) {
                // Redirect to the projects listing page after success
                router.push('/projects');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error || 'Failed to create project'}`);
            }
        } catch (error) {
            console.error('Error creating project:', error);
            alert('An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const onSubmit = async (data: { [key: string]: string | number | undefined }) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/projects/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, description}),
            });

            if (response.ok) {
                // Redirect to the projects listing page after success
                router.push('/projects');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error || 'Failed to create project'}`);
            }
        } catch (error) {
            console.error('Error creating project:', error);
            alert('An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
            <Form inputs={
                [
                    {
                        inputType: InputType.TEXT,
                        inputName: "title",
                        placeholder: "Project Title",
                        required: true,
                    },
                    {
                        inputType: InputType.TEXTAREA,
                        inputName: "description",
                        placeholder: "Project Description",
                        required: true
                    }
                ]
            } onSubmit={onSubmit}/>
                {/*<form onSubmit={handleSubmit} className="space-y-4 bg-primary/30 rounded-lg p-5">*/}
                {/*    <div>*/}
                {/*        <FormInput inputType={InputType.TEXT}*/}
                {/*                   inputName="title"*/}
                {/*                   placeholder="Project Title"*/}
                {/*                   onChange={(e) => setTitle(e.target.value)}*/}
                {/*                   required={true}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <textarea*/}
                {/*            id="description"*/}
                {/*            placeholder="Project Description"*/}
                {/*            value={description}*/}
                {/*            onChange={(e) => setDescription(e.target.value)}*/}
                {/*            required*/}
                {/*            rows={4}*/}
                {/*            className="mt-1 block w-full m-1 p-1 bg-secondary border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-secondary"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <input type="file" className="bg-secondary"/>*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <button*/}
                {/*            type="submit"*/}
                {/*            disabled={isSubmitting}*/}
                {/*            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${*/}
                {/*                isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'*/}
                {/*            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}*/}
                {/*        >*/}
                {/*            {isSubmitting ? 'Submitting...' : 'Create Project'}*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</form>*/}
        </div>
    );
}



