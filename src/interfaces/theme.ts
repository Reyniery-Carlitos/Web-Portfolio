export interface IThemeProperties {
  fontColor: string
  bgColor: string
  bgLogoColor: string
  bgTagColor: string
  borderTagColor: string
}

export interface IThemes {
  [key: string]: IThemeProperties
}
