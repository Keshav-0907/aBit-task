import { FaPlus } from "react-icons/fa6";

import Card from "./Card";

export default function Hero() {
    return (
        <div>
            <div className="w-full h-[60vh] overflow-hidden">
                <img
                    src="/HeroImg.png"
                    alt="Hero Image"
                    className="w-full h-fit object-cover"
                    style={{ objectPosition: 'center top', marginTop: '-180px' }}
                />
            </div>
            <div className="font-gloriah-20 bg-[#292828] overflow-hidden flex items-center py-5">
                <div className="text-white text-xl" style={{ whiteSpace: 'nowrap' }}>
                    n Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
                </div>
            </div>
            <div className="absolute top-[60vh] left-[70px]">
                <Card />
            </div>

            <div className="w-full flex mt-40 px-10">
                <div className="w-1/2 pl-10">
                    <div className="text-2xl">
                        Releases
                    </div>
                    <div className="text-sm">
                        Videos that you upload in collaboration with aBit appear here.
                    </div>
                </div>
                <div className="w-1/2 flex justify-around">
                    <div className="w-2/12 border-s-[1px] border-[#7A7A7A] px-4">
                        <div className="text-[#565656] font-medium">
                            1
                        </div>
                        <div className="text-sm text-[#696969]">
                            Shared Videos
                        </div>
                    </div>
                    <div className="w-2/12 border-s-[1px] border-[#7A7A7A] px-4">
                        <div className="text-[#565656] font-medium">
                            $9510
                        </div>
                        <div className="text-sm text-[#696969]">
                            Funds
                            Raised
                        </div>
                    </div>
                    <div className="w-2/12 border-s-[1px] border-[#7A7A7A] px-4">
                        <div className="text-[#565656] font-medium">
                            317
                        </div>
                        <div className="text-sm text-[#696969]">
                            Co-owner community
                        </div>
                    </div>
                    <div className="w-2/12 border-s-[1px] border-[#7A7A7A] px-4">
                        <div className="text-[#565656] font-medium">
                            $3804
                        </div>
                        <div className="text-sm text-[#696969] font-medium">
                            Co-owner
                            Earnings
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-16 mb-32 px-20 flex gap-14">
                <div className="w-64 h-80 bg-[#EDEDED] hover:bg-[#e4e4e4] shadow-lg cursor-pointer flex items-center justify-around flex-col rounded-3xl">
                    <div></div>
                    <FaPlus size={40} className="text-[#959595] " />
                    <div className="text-xs text-center text-[#A0A0A0] px-5">You haven’t uploaded any videos with aBit yet. Add now!</div>
                </div>

                <div className="w-64 h-80 rounded-3xl relative shadow-lg text-white justify-center">
                    <img className="w-full h-full object-cover rounded-3xl" src="https://s3-alpha-sig.figma.com/img/87c0/3d4c/1a546c66ea689708d7a03042db7eb340?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULW4opCyBNR4gglbz5riXHrd9nhVXO2wbmK0BZbMIQBinj1i4IrB2yZuXnAiiDQHc6NDb~Btxti3vgWPw93IgFb3TWODD-M8AmnXQmo9HSB1ht595J4w-ztExu-mKtFIAIjphRslFPSKhXljVLQ4hg2~emFvAzsqBzjgMP810YQVzhR9Hig-vSa7D-IFdCsSjNl4liESfq04FvX8C2NbHmy7ugM4jRALpzFZ7myE3wsuxoAO~65ijEdPeuHe6gHXGTzhvJiH3Af7WTd7EG3urWPXpcoLXFycq8021QzzWW1wSuv-Bjr3a5JgCYbfBuetaybOzJu6YQCLdtycyBJLkA__" alt="err" />
                    <div className="absolute inset-0 bg-black rounded-3xl opacity-40"></div>
                    
                    <div className="absolute top-0 left-0 w-full h-full py-3">
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex pl-5 font-bold">
                                The Sound of Silence
                            </div>
                            <div className="flex justify-center gap-5 text-sm">
                                <div>
                                    <div className="text-xs">
                                        Shares
                                    </div>
                                    <div>
                                        317
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs">
                                        Offered
                                    </div>
                                    <div>
                                        75%
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs">
                                        Raised
                                    </div>
                                    <div>
                                        $9510
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
