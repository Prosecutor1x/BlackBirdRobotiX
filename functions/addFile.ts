import { storage } from '@/lib/firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

export async function uploadSB3File(file: File, username: string): Promise<void> {
    try {
        const storageRef = ref(storage, `sb3/${username}/${file.name}`);
        await uploadBytes(storageRef, file);

        console.log('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file.');
    }
}