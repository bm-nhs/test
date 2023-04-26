export interface Launch {
  id: number
  name: string
  date_utc: string
  cores: Core[]
}

export interface Core {
  landing_type: string
}