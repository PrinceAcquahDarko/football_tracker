export interface Teams {
  response: Response[];
}

export interface Response {
  team: {
    code: string;
    id: number;
    name: string;
    logo: string;
  };
  outcome?: string[];
  goals_scored?: number;
  goals_conceded: number;
  teams: LastSix[];
}

export interface LastSix {
  goals: {
    home: number;
    away: number;
  };
  teams: {
    away: {
      id: number;
      name: string;
      winner: boolean;
      logo: string;
    };
    home: {
      id: number;
      name: string;
      winner: boolean;
      logo:string,
    };
  };
}

export interface GetLastSix {
  response: LastSix[];
}
