export type Post = {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number
}

export interface PostListProps {
  posts: Post[]
}

interface Episode {
  name: string;
}

interface Resident {
  name: string;
  status: string;
  image: string;
  episode: Episode[];
}

export interface Location {
  name: string;
  type: string;
  residents: Resident[];
}

export interface LocationsData {
  results: Location[];
}

export interface Note {
  comment: string;
}

export interface Notes {
  notes: Note[];
}