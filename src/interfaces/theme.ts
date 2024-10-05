export interface IThemeProperties {
  fontColor: string
  bgColor: string
  bgLogoColor: string
}

export interface IThemes {
  [key: string]: IThemeProperties
}
