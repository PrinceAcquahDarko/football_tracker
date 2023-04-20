export interface ITeams {
  response: IResponse[];
}

export interface IResponse {
  team: {
    code: string;
    id: number;
    name: string;
    logo: string;
  };
  outcome?: string[];
  goals_scored?: number;
  goals_conceded: number;
  teams: ILastSix[];
}

export interface ILastSix {
  goals: {
    home: number;
    away: number;
  };
  teams: {
    away: {
      id: number;
      name: string;
      winner: boolean;
    };
    home: {
      id: number;
      name: string;
      winner: boolean;
    };
  };
}

export interface IGetLastSix {
  response: ILastSix[];
}
