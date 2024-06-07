export enum LanguageCode {
    EN = "en",
    VI = "vi",
}

export type LanguageDetail = {
    name: string;
    code: string;
    flag: string;
};

export const languagesDetail: Record<LanguageCode, LanguageDetail> = {
    [LanguageCode.EN]: { name: "English", code: "en", flag: "🇺🇸" },
    [LanguageCode.VI]: { name: "Tiếng Việt", code: "vi", flag: "🇻🇳" },
};
