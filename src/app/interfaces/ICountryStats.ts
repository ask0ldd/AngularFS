import { ISingleEventStats } from "./ISingleEventStats";

export interface ICountryStats {
    id: number,
    country: string,
    participations : ISingleEventStats[],
}