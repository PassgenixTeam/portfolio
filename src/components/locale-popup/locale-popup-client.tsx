import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import * as React from "react";
import { languagesDetail } from "../../languages/types";
import { messages } from "./messages";

const LocalePopupClient: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
        langsMenu: { langKey: string; link: string; selected: boolean }[];
    }
> = ({ langsMenu, className, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const selectedLang = langsMenu.find((item) => item.selected)!;

    const handleLangChanged = (langKey?: string) => {
        localStorage.setItem("lang-key", langKey || selectedLang.langKey);
        setIsOpen(false);

        if (langKey) window.location.reload();
    };

    React.useEffect(() => {
        const langKey = localStorage.getItem("lang-key");
        if (!langKey) {
            setIsOpen(true);
            return;
        }

        if (selectedLang.langKey !== langKey) {
            const redirectLink = langsMenu.find((item) => item.langKey === langKey)?.link || "/";
            window.location.href = redirectLink;
            return;
        }
    }, [localStorage, setIsOpen]);

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center bg-ColorBlack/80 shadow-lg p-4" {...props}>
                <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12">
                    <DialogTitle className="text-4xl font-bold">{messages["title"][selectedLang.langKey]}</DialogTitle>
                    <Description>{messages["description"][selectedLang.langKey]}</Description>
                    <div className="flex items-center gap-8">
                        <button className="btn is-blue is-rounded btn-animation group hidden sm:inline-block" tabIndex={-1} onClick={() => handleLangChanged()}>
                            <span>
                                {languagesDetail[selectedLang.langKey].name} {languagesDetail[selectedLang.langKey].flag}
                            </span>
                        </button>
                        {langsMenu
                            .filter((item) => item.langKey !== selectedLang.langKey)
                            .map((item) => (
                                <a
                                    key={item.langKey}
                                    href={item.link}
                                    className="text-base font-bold text-ColorBlack hover:text-ColorPrimary"
                                    tabIndex={-1}
                                    onClick={() => handleLangChanged(item.langKey)}
                                >
                                    {languagesDetail[item.langKey].name} {languagesDetail[item.langKey].flag}
                                </a>
                            ))}
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default LocalePopupClient;
