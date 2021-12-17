export interface VideoType {
    id: number;
    artist: string;
    title: string;
    release_year: number;
    genre_id: number;
    image_url: string;
    genre: {key: number; name: string} | null;
}
