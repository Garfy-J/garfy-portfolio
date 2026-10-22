import {
  siIntel,
  siMaserati,
  siSony,
  siRakuten,
  siWechat,
  siSinaweibo,
  siXiaohongshu,
  siTiktok,
  siProducthunt,
  siSpotify,
  siMedium,
  siYoutube,
  siInstagram,
} from "simple-icons";
import SimpleIcon from "./SimpleIcon";
import LinkedInLogo from "./LinkedInLogo";
import WarnerBrosLogo from "./WarnerBrosLogo";
import UniversalLogo from "./UniversalLogo";
import TextLogo from "./TextLogo";

export type Brand =
  | "intel"
  | "maserati"
  | "gore-tex"
  | "capella"
  | "universal"
  | "sony"
  | "warnerbros"
  | "rakuten"
  | "wechat"
  | "weibo"
  | "xiaohongshu"
  | "douyin"
  | "producthunt"
  | "spotify"
  | "medium"
  | "youtube"
  | "instagram"
  | "linkedin"
  | "kvadrat";

/** Central registry of every brand mark used on the site — real logos first
 * (simple-icons, then Wikimedia/press SVGs), plain text name as last resort. */
export default function BrandMark({
  brand,
  className = "w-6 h-6",
}: {
  brand: Brand;
  className?: string;
}) {
  switch (brand) {
    case "intel":
      return <SimpleIcon icon={siIntel} className={className} />;
    case "maserati":
      return <SimpleIcon icon={siMaserati} className={className} />;
    case "sony":
      return <SimpleIcon icon={siSony} className={className} />;
    case "rakuten":
      return <SimpleIcon icon={siRakuten} label="Rakuten Insight" className={className} />;
    case "wechat":
      return <SimpleIcon icon={siWechat} className={className} />;
    case "weibo":
      return <SimpleIcon icon={siSinaweibo} label="Weibo" className={className} />;
    case "xiaohongshu":
      return <SimpleIcon icon={siXiaohongshu} label="RED (Xiaohongshu)" className={className} />;
    case "douyin":
      return <SimpleIcon icon={siTiktok} label="Douyin" className={className} />;
    case "producthunt":
      return <SimpleIcon icon={siProducthunt} className={className} />;
    case "spotify":
      return <SimpleIcon icon={siSpotify} className={className} />;
    case "medium":
      return <SimpleIcon icon={siMedium} className={className} />;
    case "youtube":
      return <SimpleIcon icon={siYoutube} className={className} />;
    case "instagram":
      return <SimpleIcon icon={siInstagram} className={className} />;
    case "linkedin":
      return <LinkedInLogo className={className} />;
    case "warnerbros":
      return <WarnerBrosLogo className={className} />;
    case "universal":
      return <UniversalLogo className={className} />;
    case "gore-tex":
      return <TextLogo name="Gore-Tex" className="text-base" />;
    case "capella":
      return <TextLogo name="Capella Hotels" className="text-base" />;
    case "kvadrat":
      return <TextLogo name="Kvadrat" className="text-base" />;
  }
}
