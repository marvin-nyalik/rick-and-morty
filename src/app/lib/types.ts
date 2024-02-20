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
