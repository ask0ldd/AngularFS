import ISingleEventStats from "./ISingleEventStats";

export default interface ICountryStats {
    id: number,
    country: string,
    participations : ISingleEventStats[],
}