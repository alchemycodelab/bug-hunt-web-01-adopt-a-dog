const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getDogs() {
    const response = client
        .from('dog-table')
        .select();
}

export function getDog(id) {
    const response = await client
        .from('dogs')
        .select();

    return checkError(response);    
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}